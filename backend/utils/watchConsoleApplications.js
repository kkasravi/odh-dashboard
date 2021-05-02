const WATCH_INTERVAL = 30 * 1000;

let watchTimer = null;
let consoleApplications = [];

const fetchConsoleApplications = (customObjectsApi, namespace) => {
  return customObjectsApi
    .listNamespacedCustomObject('console.openshift.io', 'v1alpha1', namespace, 'consoleapplications')
    .then((res) => {
      const cas = res?.body?.items;
      if (cas?.length) {
        return cas.reduce((acc, ca) => {
          acc.push(ca);
          return acc;
        }, []);
      }
      return [];
    })
    .catch((e) => {
      console.error(e, 'failed to get ConsoleApplications');
      return [];
    });
};

const startWatching = (fastify) => {
  if (watchTimer !== null) {
    return;
  }
  const customObjectsApi = fastify.kube.customObjectsApi;
  const namespace = fastify.kube.namespace;

  // no timer, but non-null
  watchTimer = 0;
  fetchConsoleApplications(customObjectsApi, namespace).then((results) => {
    consoleApplications = results;
    watchTimer = setInterval(() => {
      if (watchTimer) {
        fetchConsoleApplications(customObjectsApi, namespace).then((results) => {
          consoleApplications = results;
        });
      }
    }, WATCH_INTERVAL);
  });
};

const stopWatching = () => {
  if (!watchTimer) {
    return;
  }
  clearInterval(watchTimer);
  watchTimer = null;
};

const getConsoleApplications = () => consoleApplications;

module.exports = { startWatching, getConsoleApplications, stopWatching };

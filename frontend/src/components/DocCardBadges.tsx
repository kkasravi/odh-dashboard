import React from 'react';
import * as classNames from 'classnames';
import { Tooltip } from '@patternfly/react-core';
import { SyncAltIcon, CheckCircleIcon } from '@patternfly/react-icons';
import { QuickStartContext, QuickStartContextValues } from '@cloudmosaic/quickstarts';
import { OdhDocumentType } from '../types';
import { OdhDocument } from '../gen/io.openshift.console.documents.v1alpha1';
import { isQuickStartComplete, isQuickStartInProgress } from '../utilities/quickStartUtils';
import { DOC_TYPE_TOOLTIPS } from '../utilities/const';
import { getDuration } from '../utilities/utils';
import { getTextForDocType } from '../pages/learningCenter/learningCenterUtils';

import './OdhCard.scss';

type DocCardBadgesProps = {
  odhDoc: OdhDocument;
};

const DocCardBadges: React.FC<DocCardBadgesProps> = ({ odhDoc }) => {
  const qsContext = React.useContext<QuickStartContextValues>(QuickStartContext);
  const [inProgress, setInProgress] = React.useState<boolean>(false);
  const [complete, setComplete] = React.useState<boolean>(false);
  const docType = odhDoc?.spec.type as OdhDocumentType;
  const docName = odhDoc?.metadata.name;
  const duration = odhDoc?.spec.durationMinutes;

  React.useEffect(() => {
    if (docType === OdhDocumentType.QuickStart && qsContext.allQuickStarts) {
      const quickStart = qsContext.allQuickStarts.find((qs) => qs.metadata.name === docName);
      if (quickStart) {
        setInProgress(isQuickStartInProgress(quickStart.metadata.name, qsContext));
        setComplete(isQuickStartComplete(quickStart.metadata.name, qsContext));
      }
    }
  }, [qsContext, docType, docName]);

  const label = getTextForDocType(docType);
  const typeBadgeClasses = classNames('odh-card__partner-badge odh-m-doc', {
    'odh-m-documentation': docType === OdhDocumentType.Documentation,
    'odh-m-tutorial': docType === OdhDocumentType.Tutorial,
    'odh-m-quick-start': docType === OdhDocumentType.QuickStart,
    'odh-m-how-to': docType === OdhDocumentType.HowTo,
  });
  const durationBadgeClasses = classNames('odh-card__partner-badge odh-m-doc odh-m-duration', {
    'm-hidden': docType === OdhDocumentType.Documentation || duration === undefined,
  });
  const progressBadgeClasses = classNames('odh-card__partner-badge odh-m-doc', {
    'm-hidden': !complete && !inProgress,
    'odh-m-in-progress': inProgress,
    'odh-m-complete': complete,
  });

  return (
    <div className="odh-card__doc-badges">
      <Tooltip content={DOC_TYPE_TOOLTIPS[docType]}>
        <div className={typeBadgeClasses}>{label}</div>
      </Tooltip>
      <div className={durationBadgeClasses}>{getDuration(duration)}</div>
      <div className={progressBadgeClasses}>
        {inProgress ? <SyncAltIcon /> : <CheckCircleIcon />}
        {inProgress ? 'In progress' : 'Complete'}
      </div>
    </div>
  );
};

export default DocCardBadges;

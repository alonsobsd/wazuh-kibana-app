// /*
//  * Wazuh app - React component for building the agents preview section.
//  *
//  * Copyright (C) 2015-2020 Wazuh, Inc.
//  *
//  * This program is free software; you can redistribute it and/or modify
//  * it under the terms of the GNU General Public License as published by
//  * the Free Software Foundation; either version 2 of the License, or
//  * (at your option) any later version.
//  *
//  * Find more information about this on the LICENSE file.
//  */

import React, { useState, useEffect, Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  EuiCard,
  EuiIcon,
  EuiPanel,
  EuiFlexItem,
  EuiFlexGroup,
  EuiSpacer,
  EuiText,
  EuiFlexGrid,
  EuiButtonEmpty,
  EuiTitle,
  EuiHealth,
  EuiHorizontalRule,
  EuiPage,
  EuiButton,
  EuiPopover,
  EuiSelect,
  EuiLoadingChart,
  EuiToolTip,
  EuiButtonIcon,
  EuiEmptyPrompt,
  EuiPageBody
} from '@elastic/eui';
import { NodeMenu } from './node-menu';
import { SuricataTable } from './Suricata/suricata-table';
import { ZeekTable } from './Zeek/zeek-table';
import { StapTables } from './Stap/stap-tables';
// import { AddSuricata } from './Suricata/add-suricata';
import { PingPluginsNode, LoadInterfaces, loadRuleset, PingZeek } from '../../../redux/actions/nidsActions';
import { withReduxProvider, withGlobalBreadcrumb, withUserAuthorizationPrompt } from '../../../components/common/hocs';
import { useSelector, useDispatch } from 'react-redux';

export const NodeDetails = withReduxProvider(() => {
  const dispatch = useDispatch();
  const nodeTab = useSelector(state => state.nidsReducers.nodeTabSelected);
  const nodeDetail = useSelector(state => state.nidsReducers.nodeDetail);
  // const toggleSuricata = useSelector(state => state.nidsReducers.toggleSuricata);

  useEffect(() => { 
    dispatch(PingPluginsNode(nodeDetail.uuid))
    dispatch(LoadInterfaces())
    dispatch(loadRuleset())
    dispatch(PingZeek(nodeDetail.uuid))
  }, []);
  
  return (
    <Fragment>
      <NodeMenu></NodeMenu>    
        <EuiPage>
            {nodeTab === "overview" ? <p>Overview</p> : null} 
            {nodeTab === "suricata" ? <SuricataTable></SuricataTable> : null}
            {nodeTab === "zeek" ? <ZeekTable></ZeekTable> : null}
            {nodeTab === "stap" ? <StapTables></StapTables> : null}
            {/* {nodeTab === "stap" ? <p>stap</p> : null} */}
            {nodeTab === "analyzer" ? <p>Analyzer</p> : null} 
        </EuiPage>
    </Fragment>
  )
});
// export default NodeDetails
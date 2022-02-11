/*
 * Wazuh app - React component for build q queries.
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
import React, { Component } from 'react';
import { EuiButton, EuiHorizontalRule, EuiPage, EuiPageContent } from '@elastic/eui';
import { ErrorComponentPrompt } from '../common/error-boundary-prompt/error-boundary-prompt';
import { PLUGIN_PLATFORM_WAZUH_DOCUMENTATION_URL_TROUBLESHOOTING, PLUGIN_PLATFORM_URL_GUIDE, PLUGIN_PLATFORM_URL_GUIDE_TITLE } from '../../../common/constants';

export class WzBlankScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <EuiPage>
        <EuiPageContent horizontalPosition="center">
          <ErrorComponentPrompt
            errorTitle={this.props.errorToShow}
            errorInfo={''}
            action={
              <>
                <p>
                  <a href={PLUGIN_PLATFORM_URL_GUIDE}>{PLUGIN_PLATFORM_URL_GUIDE_TITLE}</a>
                  <br />
                  <br />
                  <a href={PLUGIN_PLATFORM_WAZUH_DOCUMENTATION_URL_TROUBLESHOOTING}>Wazuh installation guide</a>
                </p>
                <EuiHorizontalRule margin="s" />
                <p> </p>

                <EuiButton onClick={this.props.goToOverview} color="primary" fill>
                  Refresh
                </EuiButton>
              </>
            }
          />
        </EuiPageContent>
      </EuiPage>
    );
  }
}

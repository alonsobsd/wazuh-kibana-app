/*
 * Wazuh app - Wazuh config viewer directive
 * Copyright (C) 2015-2019 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */

import template from './wz-config-viewer.html';
import { uiModules } from 'ui/modules';
import CodeMirror from '../../utils/codemirror/lib/codemirror';


const app = uiModules.get('app/wazuh', []);

app.directive('wzConfigViewer', function () {
  return {
    restrict: 'E',
    scope: {
      getjson: '&',
      getxml: '&',
      jsoncontent: '=',
      xmlcontent: '='
    },

    controller($scope, $document) {
      $scope.callgetjson = () => {
        $scope.getjson();
      };
      $scope.callgetxml = () => {
        $scope.getxml();
      };

      $scope.$on('JSONContentReady', (ev, params) => {
        $scope.refreshJsonBox(params.data);
      });

      $scope.$on('XMLContentReady', (ev, params) => {
        $scope.refreshXmlBox(params.data);
      });

      $scope.refreshJsonBox = (json) => {
        $scope.jsoncontent = json;
        if ($scope.jsoncontent != false) {
          $scope.jsonCodeBox.setValue($scope.jsoncontent);
          setTimeout(function () {
            $scope.jsonCodeBox.refresh();
          }, 1);
        }
      };
      $scope.refreshXmlBox = (xml) => {
        $scope.xmlcontent = xml;
        if ($scope.xmlcontent != false) {
          $scope.xmlCodeBox.setValue($scope.xmlcontent);
          setTimeout(function () {
            $scope.xmlCodeBox.refresh();
          }, 1);
        }
      };

      const init = () => {
        $scope.xmlCodeBox = CodeMirror.fromTextArea(
          $document[0].getElementById('xml_box'),
          {
            lineNumbers: true,
            matchClosing: true,
            matchBrackets: true,
            mode: 'text/xml',
            readOnly: true,
            theme: 'ttcn',
            foldGutter: true,
            styleSelectedText: true,
            gutters: ['CodeMirror-foldgutter']
          }
        );

        $scope.jsonCodeBox = CodeMirror.fromTextArea(
          $document[0].getElementById('json_box'),
          {
            lineNumbers: true,
            matchClosing: true,
            matchBrackets: true,
            mode: { name: 'javascript', json: true },
            readOnly: true,
            theme: 'ttcn',
            foldGutter: true,
            styleSelectedText: true,
            gutters: ['CodeMirror-foldgutter']
          }
        );
      }
      init();
    },
    template
  };
});

/*
 * Wazuh app - Module for Overview/General visualizations
 * Copyright (C) 2015-2021 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
export default [
  {
    _id: 'Wazuh-App-Overview-Office-Agents-status',
    _source: {
      title: 'Agents status',
      visState: JSON.stringify({
        title: 'Agents Status',
        type: 'histogram',
        params: {
          type: 'histogram',
          grid: { categoryLines: false, style: { color: '#eee' } },
          categoryAxes: [
            {
              id: 'CategoryAxis-1',
              type: 'category',
              position: 'bottom',
              show: true,
              style: {},
              scale: { type: 'linear' },
              labels: { show: true, filter: true, truncate: 100 },
              title: {},
            },
          ],
          valueAxes: [
            {
              id: 'ValueAxis-1',
              name: 'LeftAxis-1',
              type: 'value',
              position: 'left',
              show: true,
              style: {},
              scale: { type: 'linear', mode: 'normal' },
              labels: { show: true, rotate: 0, filter: false, truncate: 100 },
              title: { text: 'Count' },
            },
          ],
          seriesParams: [
            {
              show: true,
              mode: 'normal',
              type: 'line',
              drawLinesBetweenPoints: true,
              showCircles: true,
              interpolate: 'cardinal',
              lineWidth: 3.5,
              data: { id: '4', label: 'Unique count of id' },
              valueAxis: 'ValueAxis-1',
            },
          ],
          addTooltip: true,
          addLegend: true,
          legendPosition: 'right',
          times: [],
          addTimeMarker: false,
        },
        aggs: [
          {
            id: '2',
            enabled: true,
            type: 'date_histogram',
            interval: '1ms',
            schema: 'segment',
            params: {
              field: 'timestamp',
              interval: '1ms',
              customInterval: '2h',
              min_doc_count: 1,
              extended_bounds: {},
            },
          },
          {
            id: '3',
            enabled: true,
            type: 'terms',
            schema: 'group',
            params: { field: 'status', size: 5, order: 'desc', orderBy: '_term' },
          },
          {
            id: '4',
            enabled: true,
            type: 'cardinality',
            schema: 'metric',
            params: { field: 'id' },
          },
        ],
      }),
      uiStateJSON: JSON.stringify({
        vis: { colors: { never_connected: '#447EBC', active: '#E5AC0E' } },
      }),
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON: JSON.stringify({
          index: 'wazuh-monitoring',
          filter: [],
          query: { query: '', language: 'lucene' },
        }),
      },
    },
    _type: 'visualization',
  },
  {
    _id: 'Wazuh-App-Overview-Office-Metric-Alerts',
    _source: {
      title: 'Metric alerts',
      visState: JSON.stringify({
        title: 'Metric Alerts',
        type: 'metric',
        params: {
          addTooltip: true,
          addLegend: false,
          type: 'gauge',
          gauge: {
            verticalSplit: false,
            autoExtend: false,
            percentageMode: false,
            gaugeType: 'Metric',
            gaugeStyle: 'Full',
            backStyle: 'Full',
            orientation: 'vertical',
            colorSchema: 'Green to Red',
            gaugeColorMode: 'None',
            useRange: false,
            colorsRange: [{ from: 0, to: 100 }],
            invertColors: false,
            labels: { show: true, color: 'black' },
            scale: { show: false, labels: false, color: '#333', width: 2 },
            type: 'simple',
            style: { fontSize: 20, bgColor: false, labelColor: false, subText: '' },
          },
        },
        aggs: [
          {
            id: '1',
            enabled: true,
            type: 'count',
            schema: 'metric',
            params: { customLabel: 'Alerts' },
          },
        ],
      }),
      uiStateJSON: JSON.stringify({ vis: { defaultColors: { '0 - 100': 'rgb(0,104,55)' } } }),
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON:
          '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}',
      },
    },
    _type: 'visualization',
  },
  {
    _id: 'Wazuh-App-Overview-Office-Metric-Max-Rule-Level',
    _source: {
      title: 'Max Rule Level',
      visState: JSON.stringify({
        "title": "Max Rule Level",
        "type": "metric",
        "aggs": [
          {
            "id": "1",
            "enabled": true,
            "type": "max",
            "params": {
              "field": "rule.level",
              "customLabel": "Max Rule Level"
            },
            "schema": "metric"
          }
        ],
        "params": {
          "addTooltip": true,
          "addLegend": false,
          "type": "metric",
          "metric": {
            "percentageMode": false,
            "useRanges": false,
            "colorSchema": "Green to Red",
            "metricColorMode": "Labels",
            "colorsRange": [
              {
                "from": 0,
                "to": 7
              },
              {
                "from": 7,
                "to": 10
              },
              {
                "from": 10,
                "to": 20
              }
            ],
            "labels": {
              "show": true
            },
            "invertColors": false,
            "style": {
              "bgFill": "#000",
              "bgColor": false,
              "labelColor": false,
              "subText": "",
              "fontSize": 26
            }
          }
        }
      }),
      uiStateJSON: JSON.stringify({ vis: { defaultColors: { '0 - 100': 'rgb(0,104,55)' } } }),
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON:
          '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}',
      },
    },
    _type: 'visualization',
  },
  {
    _id: 'Wazuh-App-Overview-Office-Metric-Suspicious-Downloads',
    _source: {
      title: 'Suspicious Downloads',
      visState: JSON.stringify({
        "title": "Suspicious Downloads Count",
        "type": "metric",
        "aggs": [
          {
            "id": "1",
            "enabled": true,
            "type": "count",
            "params": {},
            "schema": "metric"
          },
          {
            "id": "2",
            "enabled": true,
            "type": "filters",
            "params": {
              "filters": [
                {
                  "input": {
                    "query": "rule.id: \"91724\"",
                    "language": "kuery"
                  },
                  "label": "Suspicious Downloads"
                }
              ]
            },
            "schema": "group"
          }
        ],
        "params": {
          "addTooltip": true,
          "addLegend": false,
          "type": "metric",
          "metric": {
            "percentageMode": false,
            "useRanges": false,
            "colorSchema": "Green to Red",
            "metricColorMode": "Labels",
            "colorsRange": [
              {
                "from": 0,
                "to": 1
              }
            ],
            "labels": {
              "show": true
            },
            "invertColors": false,
            "style": {
              "bgFill": "#000",
              "bgColor": false,
              "labelColor": false,
              "subText": "",
              "fontSize": 26
            }
          }
        }
      }),
      uiStateJSON: JSON.stringify({ vis: { defaultColors: { '0 - 100': 'rgb(0,104,55)' } } }),
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON:
          '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}',
      },
    },
    _type: 'visualization',
  },
  {
    _id: 'Wazuh-App-Overview-Office-Metric-Malware-Alerts',
    _source: {
      title: 'Malware Alerts',
      visState: JSON.stringify({
        "title": "Malware Alerts Count",
        "type": "metric",
        "aggs": [
          {
            "id": "1",
            "enabled": true,
            "type": "count",
            "params": {},
            "schema": "metric"
          },
          {
            "id": "2",
            "enabled": true,
            "type": "filters",
            "params": {
              "filters": [
                {
                  "input": {
                    "query": "rule.id: \"91556\" or rule.id: \"91575\" or rule.id: \"91700\" ",
                    "language": "kuery"
                  },
                  "label": "Malware Alerts"
                }
              ]
            },
            "schema": "group"
          }
        ],
        "params": {
          "addTooltip": true,
          "addLegend": false,
          "type": "metric",
          "metric": {
            "percentageMode": false,
            "useRanges": false,
            "colorSchema": "Green to Red",
            "metricColorMode": "None",
            "colorsRange": [
              {
                "from": 0,
                "to": 10000
              }
            ],
            "labels": {
              "show": true
            },
            "invertColors": false,
            "style": {
              "bgFill": "#000",
              "bgColor": false,
              "labelColor": false,
              "subText": "",
              "fontSize": 26
            }
          }
        }
      }),
      uiStateJSON: JSON.stringify({ vis: { defaultColors: { '0 - 100': 'rgb(0,104,55)' } } }),
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON:
          '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}',
      },
    },
    _type: 'visualization',
  },
  {
    _id: 'Wazuh-App-Overview-Office-Metric-FullAccess-Permissions',
    _source: {
      title: 'Full Access Permissions',
      visState: JSON.stringify({
        "title": "Full Access Permission Count",
        "type": "metric",
        "aggs": [
          {
            "id": "1",
            "enabled": true,
            "type": "count",
            "params": {},
            "schema": "metric"
          },
          {
            "id": "2",
            "enabled": true,
            "type": "filters",
            "params": {
              "filters": [
                {
                  "input": {
                    "query": "rule.id: \"91725\"",
                    "language": "kuery"
                  },
                  "label": "Full Access Permissions"
                }
              ]
            },
            "schema": "group"
          }
        ],
        "params": {
          "addTooltip": true,
          "addLegend": false,
          "type": "metric",
          "metric": {
            "percentageMode": false,
            "useRanges": false,
            "colorSchema": "Green to Red",
            "metricColorMode": "None",
            "colorsRange": [
              {
                "from": 0,
                "to": 10000
              }
            ],
            "labels": {
              "show": true
            },
            "invertColors": false,
            "style": {
              "bgFill": "#000",
              "bgColor": false,
              "labelColor": false,
              "subText": "",
              "fontSize": 26
            }
          }
        }
      }),
      uiStateJSON: JSON.stringify({ vis: { defaultColors: { '0 - 100': 'rgb(0,104,55)' } } }),
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON:
          '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}',
      },
    },
    _type: 'visualization',
  },
  {
    _id: 'Wazuh-App-Overview-Office-Level-12-Alerts',
    _source: {
      title: 'Level 12 alerts',
      visState: JSON.stringify({
        title: 'Count Level 12 Alerts',
        type: 'metric',
        params: {
          addTooltip: true,
          addLegend: false,
          type: 'gauge',
          gauge: {
            verticalSplit: false,
            autoExtend: false,
            percentageMode: false,
            gaugeType: 'Metric',
            gaugeStyle: 'Full',
            backStyle: 'Full',
            orientation: 'vertical',
            colorSchema: 'Green to Red',
            gaugeColorMode: 'None',
            useRange: false,
            colorsRange: [{ from: 0, to: 100 }],
            invertColors: false,
            labels: { show: true, color: 'black' },
            scale: { show: false, labels: false, color: '#333', width: 2 },
            type: 'simple',
            style: { fontSize: 20, bgColor: false, labelColor: false, subText: '' },
          },
        },
        aggs: [
          {
            id: '1',
            enabled: true,
            type: 'count',
            schema: 'metric',
            params: { customLabel: 'Level 12 or above alerts' },
          },
        ],
      }),
      uiStateJSON: JSON.stringify({ vis: { defaultColors: { '0 - 100': 'rgb(0,104,55)' } } }),
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON: JSON.stringify({
          index: 'wazuh-alerts',
          filter: [
            {
              $state: {
                store: 'appState',
              },
              meta: {
                alias: null,
                disabled: false,
                index: 'wazuh-alerts',
                key: 'rule.level',
                negate: false,
                params: {
                  gte: 12,
                  lt: null,
                },
                type: 'range',
                value: '12 to +∞',
              },
              range: {
                'rule.level': {
                  gte: 12,
                  lt: null,
                },
              },
            },
          ],
          query: { query: '', language: 'lucene' },
        }),
      },
    },
    _type: 'visualization',
  },
  {
    _id: 'Wazuh-App-Overview-Office-Authentication-failure',
    _source: {
      title: 'Authentication failure',
      visState: JSON.stringify({
        title: 'Count Authentication Failure',
        type: 'metric',
        params: {
          addTooltip: true,
          addLegend: false,
          type: 'gauge',
          gauge: {
            verticalSplit: false,
            autoExtend: false,
            percentageMode: false,
            gaugeType: 'Metric',
            gaugeStyle: 'Full',
            backStyle: 'Full',
            orientation: 'vertical',
            colorSchema: 'Green to Red',
            gaugeColorMode: 'None',
            useRange: false,
            colorsRange: [{ from: 0, to: 100 }],
            invertColors: false,
            labels: { show: true, color: 'black' },
            scale: { show: false, labels: false, color: '#333', width: 2 },
            type: 'simple',
            style: { fontSize: 20, bgColor: false, labelColor: false, subText: '' },
          },
        },
        aggs: [
          {
            id: '1',
            enabled: true,
            type: 'count',
            schema: 'metric',
            params: { customLabel: 'Authentication failure' },
          },
        ],
      }),
      uiStateJSON: JSON.stringify({ vis: { defaultColors: { '0 - 100': 'rgb(0,104,55)' } } }),
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON: JSON.stringify({
          index: 'wazuh-alerts',
          filter: [
            {
              meta: {
                index: 'wazuh-alerts',
                type: 'phrases',
                key: 'rule.groups',
                value: 'win_authentication_failed, authentication_failed, authentication_failures',
                params: [
                  'win_authentication_failed',
                  'authentication_failed',
                  'authentication_failures',
                ],
                negate: false,
                disabled: false,
                alias: null,
              },
              query: {
                bool: {
                  should: [
                    {
                      match_phrase: {
                        'rule.groups': 'win_authentication_failed',
                      },
                    },
                    {
                      match_phrase: {
                        'rule.groups': 'authentication_failed',
                      },
                    },
                    {
                      match_phrase: {
                        'rule.groups': 'authentication_failures',
                      },
                    },
                  ],
                  minimum_should_match: 1,
                },
              },
              $state: {
                store: 'appState',
              },
            },
          ],
          query: { query: '', language: 'lucene' },
        }),
      },
    },
    _type: 'visualization',
  },
  {
    _id: 'Wazuh-App-Overview-Office-Authentication-success',
    _source: {
      title: 'Authentication success',
      visState: JSON.stringify({
        title: 'Count Authentication Success',
        type: 'metric',
        params: {
          addTooltip: true,
          addLegend: false,
          type: 'gauge',
          gauge: {
            verticalSplit: false,
            autoExtend: false,
            percentageMode: false,
            gaugeType: 'Metric',
            gaugeStyle: 'Full',
            backStyle: 'Full',
            orientation: 'vertical',
            colorSchema: 'Green to Red',
            gaugeColorMode: 'None',
            useRange: false,
            colorsRange: [{ from: 0, to: 100 }],
            invertColors: false,
            labels: { show: true, color: 'black' },
            scale: { show: false, labels: false, color: '#333', width: 2 },
            type: 'simple',
            style: { fontSize: 20, bgColor: false, labelColor: false, subText: '' },
          },
        },
        aggs: [
          {
            id: '1',
            enabled: true,
            type: 'count',
            schema: 'metric',
            params: { customLabel: 'Authentication success' },
          },
        ],
      }),
      uiStateJSON: JSON.stringify({ vis: { defaultColors: { '0 - 100': 'rgb(0,104,55)' } } }),
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON: JSON.stringify({
          index: 'wazuh-alerts',
          filter: [
            {
              meta: {
                index: 'wazuh-alerts',
                negate: false,
                disabled: false,
                alias: null,
                type: 'phrase',
                key: 'rule.groups',
                value: 'authentication_success',
                params: {
                  query: 'authentication_success',
                  type: 'phrase',
                },
              },
              query: {
                match: {
                  'rule.groups': {
                    query: 'authentication_success',
                    type: 'phrase',
                  },
                },
              },
              $state: {
                store: 'appState',
              },
            },
          ],
          query: { query: '', language: 'lucene' },
        }),
      },
    },
    _type: 'visualization',
  },
  {
    _id: 'Wazuh-App-Overview-Office-Alert-Level-Evolution',
    _source: {
      title: 'Alert level evolution',
      visState: JSON.stringify({
        title: 'Alert level evolution',
        type: 'area',
        params: {
          type: 'area',
          grid: { categoryLines: true, style: { color: '#eee' }, valueAxis: 'ValueAxis-1' },
          categoryAxes: [
            {
              id: 'CategoryAxis-1',
              type: 'category',
              position: 'bottom',
              show: true,
              style: {},
              scale: { type: 'linear' },
              labels: { show: true, filter: true, truncate: 100 },
              title: {},
            },
          ],
          valueAxes: [
            {
              id: 'ValueAxis-1',
              name: 'LeftAxis-1',
              type: 'value',
              position: 'left',
              show: true,
              style: {},
              scale: { type: 'linear', mode: 'normal' },
              labels: { show: true, rotate: 0, filter: false, truncate: 100 },
              title: { text: 'Count' },
            },
          ],
          seriesParams: [
            {
              show: 'true',
              type: 'area',
              mode: 'stacked',
              data: { label: 'Count', id: '1' },
              drawLinesBetweenPoints: true,
              showCircles: true,
              interpolate: 'cardinal',
              valueAxis: 'ValueAxis-1',
            },
          ],
          addTooltip: true,
          addLegend: true,
          legendPosition: 'right',
          times: [],
          addTimeMarker: false,
        },
        aggs: [
          { id: '1', enabled: true, type: 'count', schema: 'metric', params: {} },
          {
            id: '2',
            enabled: true,
            type: 'date_histogram',
            schema: 'segment',
            params: {
              field: 'timestamp',
              timeRange: { from: 'now-24h', to: 'now', mode: 'quick' },
              useNormalizedEsInterval: true,
              interval: 'auto',
              time_zone: 'Europe/Berlin',
              drop_partials: false,
              customInterval: '2h',
              min_doc_count: 1,
              extended_bounds: {},
            },
          },
          {
            id: '3',
            enabled: true,
            type: 'terms',
            schema: 'group',
            params: {
              field: 'rule.level',
              size: '15',
              order: 'desc',
              orderBy: '1',
              otherBucket: false,
              otherBucketLabel: 'Other',
              missingBucket: false,
              missingBucketLabel: 'Missing',
            },
          },
        ],
      }),
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON: JSON.stringify({
          index: 'wazuh-alerts',
          filter: [],
          query: { query: '', language: 'lucene' },
        }),
      },
    },
    _type: 'visualization',
  },
  {
    _id: 'Wazuh-App-Overview-Office-Alerts-summary',
    _type: 'visualization',
    _source: {
      title: 'Alerts summary',
      visState: JSON.stringify({
        title: 'Alerts summary',
        type: 'table',
        params: {
          perPage: 10,
          showPartialRows: false,
          showMeticsAtAllLevels: false,
          sort: { columnIndex: 3, direction: 'desc' },
          showTotal: false,
          showToolbar: true,
          totalFunc: 'sum',
        },
        aggs: [
          { id: '1', enabled: true, type: 'count', schema: 'metric', params: {} },
          {
            id: '2',
            enabled: true,
            type: 'terms',
            schema: 'bucket',
            params: {
              field: 'rule.id',
              otherBucket: false,
              otherBucketLabel: 'Other',
              missingBucket: false,
              missingBucketLabel: 'Missing',
              size: 1000,
              order: 'desc',
              orderBy: '1',
              customLabel: 'Rule ID',
            },
          },
          {
            id: '3',
            enabled: true,
            type: 'terms',
            schema: 'bucket',
            params: {
              field: 'rule.description',
              otherBucket: false,
              otherBucketLabel: 'Other',
              missingBucket: false,
              missingBucketLabel: 'Missing',
              size: 20,
              order: 'desc',
              orderBy: '1',
              customLabel: 'Description',
            },
          },
          {
            id: '4',
            enabled: true,
            type: 'terms',
            schema: 'bucket',
            params: {
              field: 'rule.level',
              otherBucket: false,
              otherBucketLabel: 'Other',
              missingBucket: false,
              missingBucketLabel: 'Missing',
              size: 12,
              order: 'desc',
              orderBy: '1',
              customLabel: 'Level',
            },
          },
        ],
      }),
      uiStateJSON: JSON.stringify({
        vis: { params: { sort: { columnIndex: 3, direction: 'desc' } } },
      }),
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON: JSON.stringify({
          index: 'wazuh-alerts',
          filter: [],
          query: { query: '', language: 'lucene' },
        }),
      },
    },
  },
  {
    _id: 'Wazuh-App-Overview-Office-Metric-Stats',
    _type: 'visualization',
    _source: {
      title: 'Stats',
      visState: JSON.stringify({
        title: 'Metric Stats',
        type: 'metric',
        aggs: [
          {
            id: '2',
            enabled: true,
            type: 'count',
            params: {
              customLabel: 'Total Alerts',
            },
            schema: 'metric',
          },
          {
            id: '1',
            enabled: true,
            type: 'top_hits',
            params: {
              field: 'rule.level',
              aggregate: 'concat',
              size: 1,
              sortField: 'rule.level',
              sortOrder: 'desc',
              customLabel: 'Max rule level detected',
            },
            schema: 'metric',
          },
        ],
        params: {
          addTooltip: true,
          addLegend: false,
          type: 'metric',
          metric: {
            percentageMode: false,
            useRanges: false,
            colorSchema: 'Green to Red',
            metricColorMode: 'None',
            colorsRange: [
              {
                from: 0,
                to: 10000,
              },
            ],
            labels: {
              show: true,
            },
            invertColors: false,
            style: {
              bgFill: '#000',
              bgColor: false,
              labelColor: false,
              subText: '',
              fontSize: 60,
            },
          },
        },
      }),
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON: JSON.stringify({
          index: 'wazuh-alerts',
          filter: [],
          query: { query: '', language: 'lucene' },
        }),
      },
    },
  },
  {
    _id: 'Wazuh-App-Overview-Office-IPs-By-User-Table',
    _type: 'visualization',
    _source: {
      title: 'Registered IPs for User',
      visState: JSON.stringify({
        title: 'Registered IPs for User',
        type: 'table',
        aggs: [
          {
            id: '1',
            enabled: true,
            type: 'count',
            params: {},
            schema: 'metric',
          },
          {
            id: '2',
            enabled: true,
            type: 'terms',
            params: {
              field: 'data.office365.Actor.ID',
              orderBy: '_key',
              order: 'desc',
              size: 5,
              otherBucket: false,
              otherBucketLabel: 'Other',
              missingBucket: false,
              missingBucketLabel: 'Missing',
              customLabel: 'Top Users',
            },
            schema: 'bucket',
          },
          {
            id: '3',
            enabled: true,
            type: 'terms',
            params: {
              field: 'agent.id',
              orderBy: '_key',
              order: 'desc',
              size: 5,
              otherBucket: false,
              otherBucketLabel: 'Other',
              missingBucket: false,
              missingBucketLabel: 'Missing',
              customLabel: 'Agent ID',
            },
            schema: 'bucket',
          },
          {
            id: '4',
            enabled: true,
            type: 'terms',
            params: {
              field: 'agent.name',
              orderBy: '1',
              order: 'desc',
              size: 5,
              otherBucket: false,
              otherBucketLabel: 'Other',
              missingBucket: false,
              missingBucketLabel: 'Missing',
              customLabel: 'Agent name',
            },
            schema: 'bucket',
          },
        ],
        params: {
          perPage: 5,
          showPartialRows: false,
          showMetricsAtAllLevels: false,
          sort: {
            columnIndex: null,
            direction: null,
          },
          showTotal: false,
          totalFunc: 'sum',
          percentageCol: '',
        },
      }),
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON: JSON.stringify({
          index: 'wazuh-alerts',
          filter: [],
          query: { query: '', language: 'lucene' },
        }),
      },
    },
  },
  {
    _id: 'Wazuh-App-Overview-Office-User-Operation-Level-Table',
    _type: 'visualization',
    _source: {
      title: 'User Operations',
      visState: JSON.stringify({
        "title": "User Operation Level",
        "type": "table",
        "aggs": [
          {
            "id": "1",
            "enabled": true,
            "type": "count",
            "params": {},
            "schema": "metric"
          },
          {
            "id": "2",
            "enabled": true,
            "type": "terms",
            "params": {
              "field": "data.office365.UserId",
              "orderBy": "1",
              "order": "desc",
              "size": 500,
              "otherBucket": true,
              "otherBucketLabel": "Others",
              "missingBucket": false,
              "missingBucketLabel": "Missing",
              "customLabel": "Users"
            },
            "schema": "bucket"
          },
          {
            "id": "3",
            "enabled": true,
            "type": "terms",
            "params": {
              "field": "data.office365.Operation",
              "orderBy": "1",
              "order": "desc",
              "size": 100,
              "otherBucket": false,
              "otherBucketLabel": "Other",
              "missingBucket": false,
              "missingBucketLabel": "Missing",
              "customLabel": "Operation"
            },
            "schema": "bucket"
          },
          {
            "id": "4",
            "enabled": true,
            "type": "terms",
            "params": {
              "field": "rule.level",
              "orderBy": "1",
              "order": "desc",
              "size": 20,
              "otherBucket": false,
              "otherBucketLabel": "Other",
              "missingBucket": false,
              "missingBucketLabel": "Missing",
              "customLabel": "Rule level"
            },
            "schema": "bucket"
          }
        ],
        "params": {
          "perPage": 5,
          "showPartialRows": false,
          "showMetricsAtAllLevels": false,
          "sort": {
            "columnIndex": null,
            "direction": null
          },
          "showTotal": false,
          "totalFunc": "sum",
          "percentageCol": ""
        }
      }),
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON: JSON.stringify({
          index: 'wazuh-alerts',
          filter: [],
          query: { query: '', language: 'lucene' },
        }),
      },
    },
  },
  {
    _id: 'Wazuh-App-Overview-Office-Client-IP-Operation-Level-Table',
    _type: 'visualization',
    _source: {
      title: 'Client IP Operations',
      visState: JSON.stringify({
        "title": "Client IP Operation Level",
        "type": "table",
        "aggs": [
          {
            "id": "1",
            "enabled": true,
            "type": "count",
            "params": {},
            "schema": "metric"
          },
          {
            "id": "2",
            "enabled": true,
            "type": "terms",
            "params": {
              "field": "data.office365.ClientIP",
              "orderBy": "1",
              "order": "desc",
              "size": 500,
              "otherBucket": true,
              "otherBucketLabel": "Others",
              "missingBucket": false,
              "missingBucketLabel": "Missing",
              "customLabel": "Client IP"
            },
            "schema": "bucket"
          },
          {
            "id": "3",
            "enabled": true,
            "type": "terms",
            "params": {
              "field": "data.office365.Operation",
              "orderBy": "1",
              "order": "desc",
              "size": 100,
              "otherBucket": false,
              "otherBucketLabel": "Other",
              "missingBucket": false,
              "missingBucketLabel": "Missing",
              "customLabel": "Operation"
            },
            "schema": "bucket"
          },
          {
            "id": "4",
            "enabled": true,
            "type": "terms",
            "params": {
              "field": "rule.level",
              "orderBy": "1",
              "order": "desc",
              "size": 20,
              "otherBucket": false,
              "otherBucketLabel": "Other",
              "missingBucket": false,
              "missingBucketLabel": "Missing",
              "customLabel": "Rule level"
            },
            "schema": "bucket"
          }
        ],
        "params": {
          "perPage": 5,
          "showPartialRows": false,
          "showMetricsAtAllLevels": false,
          "sort": {
            "columnIndex": null,
            "direction": null
          },
          "showTotal": false,
          "totalFunc": "sum",
          "percentageCol": ""
        }
      }),
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON: JSON.stringify({
          index: 'wazuh-alerts',
          filter: [],
          query: { query: '', language: 'lucene' },
        }),
      },
    },
  },
  {
    _id: 'Wazuh-App-Overview-Office-Top-Events-Pie',
    _type: 'visualization',
    _source: {
      title: 'Top Events',
      visState: JSON.stringify({
        title: 'Cake',
        type: 'pie',
        aggs: [
          {
            id: '1',
            enabled: true,
            type: 'count',
            params: {},
            schema: 'metric',
          },
          {
            id: '2',
            enabled: false,
            type: 'terms',
            params: {
              field: 'rule.level',
              orderBy: '1',
              order: 'desc',
              size: 5,
              otherBucket: false,
              otherBucketLabel: 'Other',
              missingBucket: false,
              missingBucketLabel: 'Missing',
            },
            schema: 'segment',
          },
          {
            id: '3',
            enabled: true,
            type: 'terms',
            params: {
              field: 'rule.description',
              orderBy: '1',
              order: 'desc',
              size: 10,
              otherBucket: false,
              otherBucketLabel: 'Other',
              missingBucket: false,
              missingBucketLabel: 'Missing',
            },
            schema: 'segment',
          },
        ],
        params: {
          type: 'pie',
          addTooltip: true,
          addLegend: true,
          legendPosition: 'right',
          isDonut: false,
          labels: {
            show: false,
            values: true,
            last_level: true,
            truncate: 100,
          },
          row: true,
        },
      }),
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON: JSON.stringify({
          index: 'wazuh-alerts',
          filter: [],
          query: { query: '', language: 'lucene' },
        }),
      },
    },
  },
  {
    _id: 'Wazuh-App-Overview-Office-Alerts-Evolution-By-User',
    _type: 'visualization',
    _source: {
      title: 'Alerts evolution over time',
      visState: JSON.stringify({
        title: 'Alerts evolution over time',
        type: 'line',
        aggs: [
          {
            id: '1',
            enabled: true,
            type: 'count',
            params: {},
            schema: 'metric',
          },
          {
            id: '2',
            enabled: true,
            type: 'date_histogram',
            params: {
              field: 'timestamp',
              timeRange: {
                from: 'now-1y',
                to: 'now',
              },
              useNormalizedEsInterval: true,
              scaleMetricValues: false,
              interval: 'h',
              drop_partials: false,
              min_doc_count: 1,
              extended_bounds: {},
            },
            schema: 'segment',
          },
          {
            id: '3',
            enabled: true,
            type: 'terms',
            params: {
              field: 'data.office365.Actor.ID',
              orderBy: '1',
              order: 'asc',
              size: 5,
              otherBucket: false,
              otherBucketLabel: 'Other',
              missingBucket: false,
              missingBucketLabel: 'Missing',
            },
            schema: 'group',
          },
        ],
        params: {
          type: 'line',
          grid: {
            categoryLines: false,
          },
          categoryAxes: [
            {
              id: 'CategoryAxis-1',
              type: 'category',
              position: 'bottom',
              show: true,
              style: {},
              scale: {
                type: 'linear',
              },
              labels: {
                show: true,
                filter: true,
                truncate: 100,
              },
              title: {},
            },
          ],
          valueAxes: [
            {
              id: 'ValueAxis-1',
              name: 'LeftAxis-1',
              type: 'value',
              position: 'left',
              show: true,
              style: {},
              scale: {
                type: 'linear',
                mode: 'normal',
              },
              labels: {
                show: true,
                rotate: 0,
                filter: false,
                truncate: 100,
              },
              title: {
                text: 'Count',
              },
            },
          ],
          seriesParams: [
            {
              show: true,
              type: 'line',
              mode: 'normal',
              data: {
                label: 'Count',
                id: '1',
              },
              valueAxis: 'ValueAxis-1',
              drawLinesBetweenPoints: true,
              lineWidth: 2,
              interpolate: 'linear',
              showCircles: true,
            },
          ],
          addTooltip: true,
          addLegend: true,
          legendPosition: 'right',
          times: [],
          addTimeMarker: false,
          labels: {},
          thresholdLine: {
            show: false,
            value: 10,
            width: 1,
            style: 'full',
            color: '#E7664C',
          },
        },
      }),
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON: JSON.stringify({
          index: 'wazuh-alerts',
          filter: [],
          query: { query: '', language: 'lucene' },
        }),
      },
    },
  },
  {
    _id: 'Wazuh-App-Overview-Office-User-By-Operation-Result',
    _type: 'visualization',
    _source: {
      title: 'User by Operation result',
      visState: JSON.stringify({
        title: 'User By Operation result',
        type: 'table',
        aggs: [
          {
            id: '1',
            enabled: true,
            type: 'count',
            params: {},
            schema: 'metric',
          },
          {
            id: '2',
            enabled: true,
            type: 'terms',
            params: {
              field: 'data.office365.Operation',
              orderBy: '1',
              order: 'desc',
              size: 10,
              otherBucket: false,
              otherBucketLabel: 'Other',
              missingBucket: false,
              missingBucketLabel: 'Missing',
              customLabel: 'Operation',
            },
            schema: 'bucket',
          },
          {
            id: '3',
            enabled: true,
            type: 'terms',
            params: {
              field: 'data.office365.UserId',
              orderBy: '1',
              order: 'desc',
              size: 10,
              otherBucket: false,
              otherBucketLabel: 'Other',
              missingBucket: false,
              missingBucketLabel: 'Missing',
              customLabel: 'User',
            },
            schema: 'bucket',
          },
          {
            id: '4',
            enabled: true,
            type: 'terms',
            params: {
              field: 'data.office365.ResultStatus',
              orderBy: '1',
              order: 'desc',
              size: 10,
              otherBucket: false,
              otherBucketLabel: 'Other',
              missingBucket: false,
              missingBucketLabel: 'Missing',
              customLabel: 'Result Status',
            },
            schema: 'bucket',
          },
        ],
        params: {
          perPage: 5,
          showPartialRows: false,
          showMetricsAtAllLevels: false,
          sort: {
            columnIndex: null,
            direction: null,
          },
          showTotal: false,
          totalFunc: 'sum',
          percentageCol: '',
        },
      }),
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON: JSON.stringify({
          index: 'wazuh-alerts',
          filter: [],
          query: { query: '', language: 'lucene' },
        }),
      },
    },
  },
  {
    _id: 'Wazuh-App-Overview-Office-Rule-Description-Level-Table',
    _type: 'visualization',
    _source: {
      title: 'Rule Description by Level',
      visState: JSON.stringify({
        "title": "Rule Description Level Table",
        "type": "table",
        "aggs": [
          {
            "id": "1",
            "enabled": true,
            "type": "count",
            "params": {},
            "schema": "metric"
          },
          {
            "id": "2",
            "enabled": true,
            "type": "terms",
            "params": {
              "field": "rule.description",
              "orderBy": "1",
              "order": "desc",
              "size": 500,
              "otherBucket": false,
              "otherBucketLabel": "Other",
              "missingBucket": false,
              "missingBucketLabel": "Missing",
              "customLabel": "Rule Description"
            },
            "schema": "bucket"
          },
          {
            "id": "3",
            "enabled": true,
            "type": "terms",
            "params": {
              "field": "rule.level",
              "orderBy": "1",
              "order": "desc",
              "size": 20,
              "otherBucket": false,
              "otherBucketLabel": "Other",
              "missingBucket": false,
              "missingBucketLabel": "Missing",
              "customLabel": "Rule Level"
            },
            "schema": "bucket"
          }
        ],
        "params": {
          "perPage": 5,
          "showPartialRows": false,
          "showMetricsAtAllLevels": false,
          "sort": {
            "columnIndex": null,
            "direction": null
          },
          "showTotal": false,
          "totalFunc": "sum",
          "percentageCol": ""
        }
      }),
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON: JSON.stringify({
          index: 'wazuh-alerts',
          filter: [],
          query: { query: '', language: 'lucene' },
        }),
      },
    },
  },
  {
    _id: 'Wazuh-App-Overview-Office-Severity-By-User-Histogram',
    _type: 'visualization',
    _source: {
      title: 'Severity by user',
      visState: JSON.stringify({
        title: 'Severity by User',
        type: 'histogram',
        aggs: [
          {
            id: '1',
            enabled: true,
            type: 'count',
            params: {},
            schema: 'metric',
          },
          {
            id: '2',
            enabled: true,
            type: 'terms',
            params: {
              field: 'rule.level',
              orderBy: '_key',
              order: 'desc',
              size: 10,
              otherBucket: false,
              otherBucketLabel: 'Other',
              missingBucket: false,
              missingBucketLabel: 'Missing',
              customLabel: 'Severity',
            },
            schema: 'segment',
          },
        ],
        params: {
          type: 'histogram',
          grid: {
            categoryLines: false,
          },
          categoryAxes: [
            {
              id: 'CategoryAxis-1',
              type: 'category',
              position: 'bottom',
              show: true,
              style: {},
              scale: {
                type: 'linear',
              },
              labels: {
                show: true,
                filter: true,
                truncate: 100,
              },
              title: {},
            },
          ],
          valueAxes: [
            {
              id: 'ValueAxis-1',
              name: 'LeftAxis-1',
              type: 'value',
              position: 'left',
              show: true,
              style: {},
              scale: {
                type: 'linear',
                mode: 'normal',
              },
              labels: {
                show: true,
                rotate: 0,
                filter: false,
                truncate: 100,
              },
              title: {
                text: 'Count',
              },
            },
          ],
          seriesParams: [
            {
              show: true,
              type: 'histogram',
              mode: 'stacked',
              data: {
                label: 'Count',
                id: '1',
              },
              valueAxis: 'ValueAxis-1',
              drawLinesBetweenPoints: true,
              lineWidth: 2,
              showCircles: true,
            },
          ],
          addTooltip: true,
          addLegend: true,
          legendPosition: 'right',
          times: [],
          addTimeMarker: false,
          labels: {
            show: false,
          },
          thresholdLine: {
            show: false,
            value: 10,
            width: 1,
            style: 'full',
            color: '#E7664C',
          },
        },
      }),
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON: JSON.stringify({
          index: 'wazuh-alerts',
          filter: [],
          query: { query: '', language: 'lucene' },
        }),
      },
    },
  },
  {
    _id: 'Wazuh-App-Overview-Office-Rule-Level-Histogram',
    _type: 'visualization',
    _source: {
      title: 'Rule level histrogram',
      visState: JSON.stringify({
        title: 'Rule level histogram',
        type: 'area',
        aggs: [
          {
            id: '1',
            enabled: true,
            type: 'count',
            params: {},
            schema: 'metric',
          },
          {
            id: '2',
            enabled: true,
            type: 'date_histogram',
            params: {
              field: 'timestamp',
              timeRange: {
                from: 'now/w',
                to: 'now/w',
              },
              useNormalizedEsInterval: true,
              scaleMetricValues: false,
              interval: '3h',
              drop_partials: false,
              min_doc_count: 1,
              extended_bounds: {},
            },
            schema: 'segment',
          },
          {
            id: '3',
            enabled: true,
            type: 'terms',
            params: {
              field: 'rule.level',
              orderBy: '1',
              order: 'desc',
              size: 5,
              otherBucket: false,
              otherBucketLabel: 'Other',
              missingBucket: false,
              missingBucketLabel: 'Missing',
            },
            schema: 'group',
          },
        ],
        params: {
          type: 'area',
          grid: {
            categoryLines: false,
          },
          categoryAxes: [
            {
              id: 'CategoryAxis-1',
              type: 'category',
              position: 'bottom',
              show: true,
              style: {},
              scale: {
                type: 'linear',
              },
              labels: {
                show: true,
                filter: true,
                truncate: 100,
                rotate: 0,
              },
              title: {},
            },
          ],
          valueAxes: [
            {
              id: 'ValueAxis-1',
              name: 'LeftAxis-1',
              type: 'value',
              position: 'left',
              show: true,
              style: {},
              scale: {
                type: 'linear',
                mode: 'normal',
              },
              labels: {
                show: true,
                rotate: 0,
                filter: false,
                truncate: 100,
              },
              title: {
                text: 'Count',
              },
            },
          ],
          seriesParams: [
            {
              show: true,
              type: 'histogram',
              mode: 'stacked',
              data: {
                label: 'Count',
                id: '1',
              },
              drawLinesBetweenPoints: true,
              lineWidth: 2,
              showCircles: true,
              interpolate: 'linear',
              valueAxis: 'ValueAxis-1',
            },
          ],
          addTooltip: true,
          addLegend: true,
          legendPosition: 'right',
          times: [],
          addTimeMarker: false,
          thresholdLine: {
            show: false,
            value: 10,
            width: 1,
            style: 'full',
            color: '#E7664C',
          },
          labels: {},
        },
      }),
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON: JSON.stringify({
          index: 'wazuh-alerts',
          filter: [],
          query: { query: '', language: 'lucene' },
        }),
      },
    },
  },
  {
    _id: 'Wazuh-App-Overview-Office-IPs-By-User-Barchart',
    _type: 'visualization',
    _source: {
      title: 'IPs by user',
      visState: JSON.stringify({
        title: 'IPs by User',
        type: 'horizontal_bar',
        aggs: [
          {
            id: '1',
            enabled: true,
            type: 'count',
            params: {},
            schema: 'metric',
          },
          {
            id: '2',
            enabled: true,
            type: 'terms',
            params: {
              field: 'data.office365.ClientIP',
              orderBy: '1',
              order: 'desc',
              size: 5,
              otherBucket: false,
              otherBucketLabel: 'Other',
              missingBucket: false,
              missingBucketLabel: 'Missing',
              customLabel: 'IP',
            },
            schema: 'segment',
          },
          {
            id: '3',
            enabled: true,
            type: 'terms',
            params: {
              field: 'data.office365.UserId',
              orderBy: '1',
              order: 'desc',
              size: 5,
              otherBucket: false,
              otherBucketLabel: 'Other',
              missingBucket: false,
              missingBucketLabel: 'Missing',
            },
            schema: 'group',
          },
        ],
        params: {
          type: 'histogram',
          grid: {
            categoryLines: false,
          },
          categoryAxes: [
            {
              id: 'CategoryAxis-1',
              type: 'category',
              position: 'left',
              show: true,
              style: {},
              scale: {
                type: 'linear',
              },
              labels: {
                show: true,
                rotate: 0,
                filter: false,
                truncate: 200,
              },
              title: {},
            },
          ],
          valueAxes: [
            {
              id: 'ValueAxis-1',
              name: 'LeftAxis-1',
              type: 'value',
              position: 'bottom',
              show: true,
              style: {},
              scale: {
                type: 'linear',
                mode: 'normal',
              },
              labels: {
                show: true,
                rotate: 75,
                filter: true,
                truncate: 100,
              },
              title: {
                text: 'Count',
              },
            },
          ],
          seriesParams: [
            {
              show: true,
              type: 'histogram',
              mode: 'stacked',
              data: {
                label: 'Count',
                id: '1',
              },
              valueAxis: 'ValueAxis-1',
              drawLinesBetweenPoints: true,
              lineWidth: 2,
              showCircles: true,
            },
          ],
          addTooltip: true,
          addLegend: true,
          legendPosition: 'right',
          times: [],
          addTimeMarker: false,
          labels: {},
          thresholdLine: {
            show: false,
            value: 10,
            width: 1,
            style: 'full',
            color: '#E7664C',
          },
        },
      }),
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON: JSON.stringify({
          index: 'wazuh-alerts',
          filter: [],
          query: { query: '', language: 'lucene' },
        }),
      },
    },
  },
  {
    _id: 'Wazuh-App-Overview-Office-Severity-By-User-Barchart',
    _type: 'visualization',
    _source: {
      title: 'Severity by user',
      visState: JSON.stringify({
        "title": "Severity By User Barchart",
        "type": "histogram",
        "aggs": [
          {
            "id": "1",
            "enabled": true,
            "type": "count",
            "params": {},
            "schema": "metric"
          },
          {
            "id": "2",
            "enabled": true,
            "type": "terms",
            "params": {
              "field": "rule.level",
              "orderBy": "1",
              "order": "desc",
              "size": 5,
              "otherBucket": true,
              "otherBucketLabel": "Other",
              "missingBucket": false,
              "missingBucketLabel": "Missing"
            },
            "schema": "segment"
          },
          {
            "id": "3",
            "enabled": true,
            "type": "terms",
            "params": {
              "field": "data.office365.UserId",
              "orderBy": "1",
              "order": "desc",
              "size": 20,
              "otherBucket": false,
              "otherBucketLabel": "Other",
              "missingBucket": false,
              "missingBucketLabel": "Missing"
            },
            "schema": "group"
          }
        ],
        "params": {
          "type": "histogram",
          "grid": {
            "categoryLines": false
          },
          "categoryAxes": [
            {
              "id": "CategoryAxis-1",
              "type": "category",
              "position": "bottom",
              "show": true,
              "style": {},
              "scale": {
                "type": "linear"
              },
              "labels": {
                "show": true,
                "filter": true,
                "truncate": 100
              },
              "title": {}
            }
          ],
          "valueAxes": [
            {
              "id": "ValueAxis-1",
              "name": "LeftAxis-1",
              "type": "value",
              "position": "left",
              "show": true,
              "style": {},
              "scale": {
                "type": "linear",
                "mode": "normal"
              },
              "labels": {
                "show": true,
                "rotate": 0,
                "filter": false,
                "truncate": 100
              },
              "title": {
                "text": "Count"
              }
            }
          ],
          "seriesParams": [
            {
              "show": true,
              "type": "histogram",
              "mode": "stacked",
              "data": {
                "label": "Count",
                "id": "1"
              },
              "valueAxis": "ValueAxis-1",
              "drawLinesBetweenPoints": true,
              "lineWidth": 2,
              "showCircles": true
            }
          ],
          "addTooltip": true,
          "addLegend": true,
          "legendPosition": "right",
          "times": [],
          "addTimeMarker": false,
          "labels": {
            "show": false
          },
          "thresholdLine": {
            "show": false,
            "value": 10,
            "width": 1,
            "style": "full",
            "color": "#E7664C"
          }
        }
      }),
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON: JSON.stringify({
          index: 'wazuh-alerts',
          filter: [],
          query: { query: '', language: 'lucene' },
        }),
      },
    },
  },
  {
    _id: 'Wazuh-App-Overview-Office-Top-Users-By-Subscription-Barchart',
    _type: 'visualization',
    _source: {
      title: 'Top User By Subscription',
      visState: JSON.stringify({
        "title": "Top User By Subscription",
        "type": "histogram",
        "aggs": [
          {
            "id": "1",
            "enabled": true,
            "type": "count",
            "params": {},
            "schema": "metric"
          },
          {
            "id": "2",
            "enabled": true,
            "type": "terms",
            "params": {
              "field": "data.office365.UserId",
              "orderBy": "1",
              "order": "desc",
              "size": 5,
              "otherBucket": false,
              "otherBucketLabel": "Other",
              "missingBucket": false,
              "missingBucketLabel": "Missing"
            },
            "schema": "segment"
          },
          {
            "id": "3",
            "enabled": true,
            "type": "terms",
            "params": {
              "field": "data.office365.Subscription",
              "orderBy": "1",
              "order": "desc",
              "size": 5,
              "otherBucket": false,
              "otherBucketLabel": "Other",
              "missingBucket": false,
              "missingBucketLabel": "Missing"
            },
            "schema": "group"
          }
        ],
        "params": {
          "type": "histogram",
          "grid": {
            "categoryLines": false
          },
          "categoryAxes": [
            {
              "id": "CategoryAxis-1",
              "type": "category",
              "position": "bottom",
              "show": true,
              "style": {},
              "scale": {
                "type": "linear"
              },
              "labels": {
                "show": true,
                "filter": true,
                "truncate": 100,
                "rotate": 0
              },
              "title": {}
            }
          ],
          "valueAxes": [
            {
              "id": "ValueAxis-1",
              "name": "LeftAxis-1",
              "type": "value",
              "position": "left",
              "show": true,
              "style": {},
              "scale": {
                "type": "linear",
                "mode": "normal"
              },
              "labels": {
                "show": true,
                "rotate": 0,
                "filter": false,
                "truncate": 100
              },
              "title": {
                "text": "Count"
              }
            }
          ],
          "seriesParams": [
            {
              "show": true,
              "type": "histogram",
              "mode": "stacked",
              "data": {
                "label": "Count",
                "id": "1"
              },
              "valueAxis": "ValueAxis-1",
              "drawLinesBetweenPoints": true,
              "lineWidth": 2,
              "showCircles": true
            }
          ],
          "addTooltip": true,
          "addLegend": true,
          "legendPosition": "right",
          "times": [],
          "addTimeMarker": false,
          "labels": {
            "show": false
          },
          "thresholdLine": {
            "show": false,
            "value": 10,
            "width": 1,
            "style": "full",
            "color": "#E7664C"
          }
        }
      }),
      uiStateJSON: '{}',
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON: JSON.stringify({
          index: 'wazuh-alerts',
          filter: [],
          query: { query: '', language: 'lucene' },
        }),
      },
    },
  },
  {
    _id: 'Wazuh-App-Overview-Office-Location',
    _type: 'visualization',
    _source: {
      title: 'Geolocation map',
      visState: JSON.stringify({
        title: 'Geolocation map',
        type: 'tile_map',
        params: {
          colorSchema: 'Green to Red',
          mapType: 'Scaled Circle Markers',
          isDesaturated: false,
          addTooltip: true,
          heatClusterSize: 1.5,
          legendPosition: 'bottomright',
          mapZoom: 1,
          mapCenter: [0, 0],
          wms: { enabled: false, options: { format: 'image/png', transparent: true } },
          dimensions: {
            metric: { accessor: 1, format: { id: 'number' }, params: {}, aggType: 'count' },
            geohash: {
              accessor: 0,
              format: { id: 'string' },
              params: { precision: 2, useGeocentroid: true },
              aggType: 'geohash_grid',
            },
            geocentroid: {
              accessor: 2,
              format: { id: 'string' },
              params: {},
              aggType: 'geo_centroid',
            },
          },
        },
        aggs: [
          { id: '1', enabled: true, type: 'count', schema: 'metric', params: {} },
          {
            id: '2',
            enabled: true,
            type: 'geohash_grid',
            schema: 'segment',
            params: {
              field: 'GeoLocation.location',
              autoPrecision: true,
              precision: 2,
              useGeocentroid: true,
              isFilteredByCollar: true,
              mapZoom: 1,
              mapCenter: [0, 0],
            },
          },
        ],
      }),
      uiStateJSON: JSON.stringify({
        mapZoom: 2,
        mapCenter: [38.685509760012025, -31.816406250000004],
      }),
      description: '',
      version: 1,
      kibanaSavedObjectMeta: {
        searchSourceJSON: JSON.stringify({
          index: 'wazuh-alerts',
          query: { query: '', language: 'lucene' },
          filter: [],
        }),
      },
    },
  },
];

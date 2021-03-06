/*
 * File: app/view/MainView.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('DM.view.MainView', {
    extend: 'Ext.container.Viewport',

    requires: [
        'DM.view.MyMenuItem',
        'Ext.Img',
        'Ext.menu.Menu',
        'Ext.menu.Separator',
        'Ext.tab.Panel',
        'Ext.tab.Tab'
    ],

    itemId: 'mainView',
    layout: 'border',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'north',
                    height: 102,
                    itemId: 'headerPanel',
                    bodyPadding: 10,
                    bodyStyle: {
                        background: '#104B86',
                        padding: '10px'
                    },
                    header: false,
                    title: 'Header',
                    items: [
                        {
                            xtype: 'image',
                            height: 62,
                            width: 430,
                            src: 'images/0011.png'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'west',
                    split: true,
                    itemId: 'menuPanel',
                    width: 250,
                    collapseDirection: 'left',
                    collapsible: true,
                    title: '系统导航',
                    layout: {
                        type: 'accordion',
                        hideCollapseTool: false
                    },
                    items: [
                        {
                            xtype: 'panel',
                            collapsed: false,
                            icon: 'images/add.png',
                            overlapHeader: false,
                            title: '数据管理',
                            items: [
                                {
                                    xtype: 'menu',
                                    floating: false,
                                    itemId: 'menu1',
                                    items: [
                                        {
                                            xtype: 'mymenuitem'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            text: '申请调阅'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            text: '非现场录入'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            title: '我的地盘',
                            items: [
                                {
                                    xtype: 'menu',
                                    floating: false,
                                    itemId: 'menu2',
                                    items: [
                                        {
                                            xtype: 'menuitem',
                                            text: '个人信息'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            text: '待审事项'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            text: '已审事项'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            text: '我的投诉'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            text: '我的评价'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            title: '使用监督',
                            items: [
                                {
                                    xtype: 'menu',
                                    floating: false,
                                    width: 120,
                                    items: [
                                        {
                                            xtype: 'menuitem',
                                            text: '执法仪'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            text: '采集工作站'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            text: '异常报警'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            title: '执法监督',
                            items: [
                                {
                                    xtype: 'menu',
                                    floating: false,
                                    width: 120,
                                    items: [
                                        {
                                            xtype: 'menuitem',
                                            text: '主动监督'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            text: '被动监督'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            title: '监督考评',
                            items: [
                                {
                                    xtype: 'menu',
                                    floating: false,
                                    width: 120,
                                    items: [
                                        {
                                            xtype: 'menuitem',
                                            text: '评价考评'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            text: '投诉考评'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            text: '拍摄比考评'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            title: '统计报表',
                            items: [
                                {
                                    xtype: 'menu',
                                    floating: false,
                                    width: 120,
                                    items: [
                                        {
                                            xtype: 'menuitem',
                                            text: '业务量统计'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            text: '异常数据统计'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            text: '考核分值统计'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            text: '设备台帐统计'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            title: '系统管理',
                            items: [
                                {
                                    xtype: 'menu',
                                    floating: false,
                                    itemId: 'menu3',
                                    items: [
                                        {
                                            xtype: 'menuitem',
                                            text: '部门管理'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            text: '警员管理'
                                        },
                                        {
                                            xtype: 'menuseparator'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            text: '执法记录仪管理'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            text: '采集工作站管理'
                                        },
                                        {
                                            xtype: 'menuseparator'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            text: '用户管理'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            text: '角色管理'
                                        },
                                        {
                                            xtype: 'menuitem',
                                            text: '权限管理'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    listeners: {
                        resize: function(comp, width, height){
                            Ext.get('bgImg').applyStyles({
                                width: width + 'px',
                                height: height + 'px'
                            });
                        }
                    },
                    flex: 1,
                    region: 'center',
                    html: '<img id="bgImg" src="images/welcome.png"/>',
                    itemId: 'contentPanel',
                    resizable: true,
                    header: false,
                    title: 'Content',
                    items: [
                        {
                            xtype: 'tabpanel',
                            activeTab: 0,
                            items: [
                                {
                                    xtype: 'panel',
                                    title: '首页'
                                },
                                {
                                    xtype: 'panel',
                                    closable: true,
                                    title: 'Tab 3'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'south',
                    split: true,
                    height: 30,
                    html: '<div align="center">版权所有：深圳威尔电器有限公司</div>',
                    header: false,
                    title: 'My Panel',
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    }
                }
            ]
        });

        me.callParent(arguments);
    }

});
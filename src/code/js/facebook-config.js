var fbConfig = {
    /*--------------需要修改的配置信息 Begin ------------------*/
    // 应用名
    appName: "Sword and Pickaxe",

    // facebook ID
    appId: '1705886366313641',

    // 应用Key 由中控提供
    appKey: '1ac54198-9b89-4fbc-bef2-03304ae935ba',

    // 默认语言
    defaultLang: 'en',

    // cdn地址
    cdnURL: 'http://images-sg-cdn.pocketgamesol.com/sword',

    // 其他接口地址
    apiUrl: 'http://cdk.swordnpickaxe.com',

    // 官网首页地址
    websiteUrl: "http://swordnpickaxe.com",

    // facebook 活动说明贴URL
    pageUrl: 'https://www.facebook.com/swordnpickaxe',

    // icon Name
    iconName: 'icon_9061be7.png',

    // 领取规则 数组渲染用换行拼接 -
    getRules: [
        '1. like and share the corresponding article and then claim gift code here.', '2. One charecter only can claim the reward once '
    ],

    // 礼包内容   数组渲染用换行拼接
    giftInfo: ['Diamond*80', 'Junior miners package*5', 'Bomb*3', 'Triple summon occult*1'],

    // 使用说明  数组渲染用换行拼接
    usage: ['1. Event -- Gift pack', '2. and type the gift code to claim reward'],

    // APP下载URL
    downloadURL: {
        ios: 'https://itunes.apple.com/app/id1061829070',
        android: 'http://res-pkg-cdn.pocketgamesol.com/swordnpickaxe/swordnpickaxe.apk'
    }
};
// 本地存储 cookie 键值
fbConfig.cookieKey = 'chang-cookie-key' + fbConfig.appId;

// i18n资源加载路径
fbConfig.i18nResURL = fbConfig.websiteUrl + '/code/i18n/';

// 点赞路径
fbConfig.likeUrl = fbConfig.pageUrl;

// 回调路径，需要在facebook配置该路径(即此页面地址)
fbConfig.redirectUrl = fbConfig.websiteUrl + '/code/index.html';

// 登录接口
fbConfig.loginUrl = fbConfig.apiUrl + '/fb/login';

// ICON URL
fbConfig.iconURL = fbConfig.cdnURL ? fbConfig.cdnURL + '/common/img/' + fbConfig.iconName : fbConfig.websiteUrl + '/static/common/img/' + fbConfig.iconName
import AuthCoreModule from './app/auth/guard';
import AuthTwoFactorModule from './app/auth/twofactor';
import ToikitCoinModule from './app/toikit/coin';
import ToikitCoreModule from './app/toikit/core';
import ToikitNotificationModule from './app/toikit/notification';
import AIContentModule from './app/ai/content';
import FeatureEvaluation from './app/feature/evaluation';

// import DomainItemModule from './app/domain/items';
// import DomainCloudflareModule from './app/domain/cloudflare';

// 116.111.226.114
export const config = {
  port: 4000,
  modules: [
    AuthCoreModule,
    AuthTwoFactorModule,
    AIContentModule,
    ToikitCoinModule,
    ToikitNotificationModule,
    ToikitCoreModule,
    FeatureEvaluation,
    // DomainItemModule,
    // DomainCloudflareModule
  ]
};

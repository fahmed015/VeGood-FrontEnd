import Vue from 'vue';
import * as FullStory from '@fullstory/browser';

FullStory.init({ orgId: '1296HM' ,
recordCrossDomainIFrames:true,
debug:true,
});
Vue.prototype.$FullStory = FullStory;

import { CorsHeaderInterceptor } from './cors-header.interceptor';

describe('CorsHeaderInterceptor', () => {
  it('should be defined', () => {
    expect(new CorsHeaderInterceptor()).toBeDefined();
  });
});

import PluginBase from './lib/PluginBase';
import WindowControlPlugin from './lib/windowControl';
import FileHelperPlugin from './lib/FileHelper';
import HttpHelperPlugin from './lib/HttpHelper';
import ShellHelperPlugin from './lib/ShellHelper';
import ClientStoragePlugin from './lib/ClientStorage';
const { isCef, getAppConfig, getExePath, getHomeUrl, setZoomLevel } = PluginBase;
export default {
  // 静态方法
  isCef,
  getAppConfig,
  getExePath,
  getHomeUrl,
  setZoomLevel,
  // 构造器对象
  WindowControlPlugin,
  FileHelperPlugin,
  HttpHelperPlugin,
  ShellHelperPlugin,
  ClientStoragePlugin,
};

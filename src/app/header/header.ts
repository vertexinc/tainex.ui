export class Header {
  appName : string;
  userName : string;
  language : Array<string>

  constructor(appName,userName,language){
    this.appName = appName;
    this.userName = userName;
    this.language = language;
  }
}

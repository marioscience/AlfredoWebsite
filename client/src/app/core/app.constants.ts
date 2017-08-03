export class ApiRootConstants {
  static introduction = "api/introduction";
  static music = "api/music";
  static biography = "api/biography";
  static transcription = "api/transcription";
}

export class SongkickCredentials {
  static artistId = 9134449;
  /* Eventually the apiKey needs to be protected. Basically, if someone gets a hold of the API key
   * they could abuse your service and stop the app from working.
    * A good idea to solve this is to make the call to the app's server without the apiKey, then have the server
    * make the api call with the key to the songkick server and return that data. */
  static apiKey = "kbciuuy27&TDHGuyg823t87tcghbcuy1g38";
}

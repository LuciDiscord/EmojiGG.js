// Generated by CoffeeScript 2.4.1
(function() {
  /*
   * @author Jinzulen
   * @license Apache 2.0
   * @copyright Copyright 2020 Khalil G. <https://github.com/Jinzulen>
   */
  var API, GrabTitle;

  API = require("../../API/EmojiAPI");

  module.exports = GrabTitle = class GrabTitle {
    constructor(Title, Callback) {
      return new Promise(function(Resolve, Reject) {
        if (!Title) {
          Reject("# [DEmojiJS] Please enter an emote title to continue.");
        }
        if (typeof Title !== "string") {
          Reject("# [DEmojiJS] Emote title has to be a string.");
        }
        return API.contactAPI("https://emoji.gg/api/", function(Error, Data) {
          var i, results;
          if (Error) {
            Reject(Error);
          }
          i = 0;
          results = [];
          while (i < Object.keys(Data).length) {
            // Get rid of case sensitivity.
            Data[i]["title"] = Data[i]["title"].toLowerCase();
            if (Data[i]["title"] === Title.toLowerCase()) {
              Resolve(Data[i]);
            }
            results.push(i++);
          }
          return results;
        });
      });
    }

  };

}).call(this);
var config = require("../config/config");
var http = require("http");

module.exports = function (app) {
    app.get("/api/concertschedule", function (req, res) {

        // URL: http://api.songkick.com/api/3.0/artists/{artist_id}/calendar.json?apikey={your_api_key}
        console.log("Artist Id: ", config.songKickCredentials.artistId);
        console.log("api key: ", process.env[config.songKickCredentials.apiKey]);

        var artistId = config.songKickCredentials.artistId;
        var apiKey = process.env[config.songKickCredentials.apiKey];

        if (artistId && apiKey) {
            var path = "/api/3.0/artists/" + artistId + "/calendar.json?apikey=" + apiKey;

            var request = {
                host: "api.songkick.com",
                port: 80,
                path: path,
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            };

            // var httpRequest = http.request(request, function (response) {
            //    console.log(response);
            //    response.on("data", function (chunk) {
            //        res.write(chunk);
            //    });
            //    response.on("end", function () {
            //        res.end();
            //    })
            // });

            //httpRequest.end();

            var tempMockData = "{\n" +
                "  \"resultsPage\": {\n" +
                "    \"results\": { \"event\": [\n" +
                "      {\n" +
                "        \"id\":11129128,\n" +
                "        \"type\":\"Concert\",\n" +
                "        \"uri\":\"http://www.songkick.com/concerts/11129128-wild-flag-at-fillmore?utm_source=PARTNER_ID&utm_medium=partner\",\n" +
                "        \"displayName\":\"Wild Flag at The Fillmore (April 18, 2012)\",\n" +
                "        \"start\":{\"time\":\"20:00:00\",\n" +
                "                 \"date\":\"2012-04-18\",\n" +
                "                 \"datetime\":\"2012-04-18T20:00:00-0800\"},\n" +
                "        \"performance\":[{\"artist\":{\"uri\":\"http://www.songkick.com/artists/29835-wild-flag?utm_source=PARTNER_ID&utm_medium=partner\",\n" +
                "                                  \"displayName\":\"Wild Flag\",\"id\":29835,\"identifier\":[]},\n" +
                "                        \"displayName\":\"Wild Flag\",\n" +
                "                        \"billingIndex\":1,\n" +
                "                        \"id\":21579303,\n" +
                "                        \"billing\":\"headline\"}],\n" +
                "        \"location\":{\"city\":\"San Francisco, CA, US\",\"lng\":-122.4332937,\"lat\":37.7842398},\n" +
                "        \"venue\":{\"id\":6239,\n" +
                "                 \"displayName\":\"The Fillmore\",\n" +
                "                 \"uri\":\"http://www.songkick.com/venues/6239-fillmore?utm_source=PARTNER_ID&utm_medium=partner\",\n" +
                "                 \"lng\":-122.4332937, \"lat\":37.7842398,\n" +
                "                 \"metroArea\":{\"uri\":\"http://www.songkick.com/metro_areas/26330-us-sf-bay-area?utm_source=PARTNER_ID&utm_medium=partner\",\n" +
                "                              \"displayName\":\"SF Bay Area\",\"country\":{\"displayName\":\"US\"},\"id\":26330,\"state\":{\"displayName\":\"CA\"}}},\n" +
                "        \"status\":\"ok\",\n" +
                "        \"popularity\":0.012763\n" +
                "      },\n" +
                "      {\n" +
                "        \"id\":11129128,\n" +
                "        \"type\":\"Concert\",\n" +
                "        \"uri\":\"http://www.songkick.com/concerts/11129128-wild-flag-at-fillmore?utm_source=PARTNER_ID&utm_medium=partner\",\n" +
                "        \"displayName\":\"Wild Flag at The Fillmore (April 18, 2012)\",\n" +
                "        \"start\":{\"time\":\"20:00:00\",\n" +
                "                 \"date\":\"2012-04-18\",\n" +
                "                 \"datetime\":\"2012-04-18T20:00:00-0800\"},\n" +
                "        \"performance\":[{\"artist\":{\"uri\":\"http://www.songkick.com/artists/29835-wild-flag?utm_source=PARTNER_ID&utm_medium=partner\",\n" +
                "                                  \"displayName\":\"Wild Flag\",\"id\":29835,\"identifier\":[]},\n" +
                "                        \"displayName\":\"Wild Flag\",\n" +
                "                        \"billingIndex\":1,\n" +
                "                        \"id\":21579303,\n" +
                "                        \"billing\":\"headline\"}],\n" +
                "        \"location\":{\"city\":\"San Francisco, CA, US\",\"lng\":-122.4332937,\"lat\":37.7842398},\n" +
                "        \"venue\":{\"id\":6239,\n" +
                "                 \"displayName\":\"The Fillmore\",\n" +
                "                 \"uri\":\"http://www.songkick.com/venues/6239-fillmore?utm_source=PARTNER_ID&utm_medium=partner\",\n" +
                "                 \"lng\":-122.4332937, \"lat\":37.7842398,\n" +
                "                 \"metroArea\":{\"uri\":\"http://www.songkick.com/metro_areas/26330-us-sf-bay-area?utm_source=PARTNER_ID&utm_medium=partner\",\n" +
                "                              \"displayName\":\"SF Bay Area\",\"country\":{\"displayName\":\"US\"},\"id\":26330,\"state\":{\"displayName\":\"CA\"}}},\n" +
                "        \"status\":\"ok\",\n" +
                "        \"popularity\":0.012763\n" +
                "      },\n" +
                "      {\n" +
                "        \"id\":11129128,\n" +
                "        \"type\":\"Concert\",\n" +
                "        \"uri\":\"http://www.songkick.com/concerts/11129128-wild-flag-at-fillmore?utm_source=PARTNER_ID&utm_medium=partner\",\n" +
                "        \"displayName\":\"Wild Flag at The Fillmore (April 18, 2012)\",\n" +
                "        \"start\":{\"time\":\"20:00:00\",\n" +
                "                 \"date\":\"2012-04-18\",\n" +
                "                 \"datetime\":\"2012-04-18T20:00:00-0800\"},\n" +
                "        \"performance\":[{\"artist\":{\"uri\":\"http://www.songkick.com/artists/29835-wild-flag?utm_source=PARTNER_ID&utm_medium=partner\",\n" +
                "                                  \"displayName\":\"Wild Flag\",\"id\":29835,\"identifier\":[]},\n" +
                "                        \"displayName\":\"Wild Flag\",\n" +
                "                        \"billingIndex\":1,\n" +
                "                        \"id\":21579303,\n" +
                "                        \"billing\":\"headline\"}],\n" +
                "        \"location\":{\"city\":\"San Francisco, CA, US\",\"lng\":-122.4332937,\"lat\":37.7842398},\n" +
                "        \"venue\":{\"id\":6239,\n" +
                "                 \"displayName\":\"The Fillmore\",\n" +
                "                 \"uri\":\"http://www.songkick.com/venues/6239-fillmore?utm_source=PARTNER_ID&utm_medium=partner\",\n" +
                "                 \"lng\":-122.4332937, \"lat\":37.7842398,\n" +
                "                 \"metroArea\":{\"uri\":\"http://www.songkick.com/metro_areas/26330-us-sf-bay-area?utm_source=PARTNER_ID&utm_medium=partner\",\n" +
                "                              \"displayName\":\"SF Bay Area\",\"country\":{\"displayName\":\"US\"},\"id\":26330,\"state\":{\"displayName\":\"CA\"}}},\n" +
                "        \"status\":\"ok\",\n" +
                "        \"popularity\":0.012763\n" +
                "      }\n" +
                "    ]},\n" +
                "    \"totalEntries\":24,\n" +
                "    \"perPage\":50,\n" +
                "    \"page\":1,\n" +
                "    \"status\":\"ok\"\n" +
                "  }\n" +
                "}";

            res.send(JSON.parse(tempMockData));
            console.log("URL: ", path);
        } else {
            console.log("ERROR: Api Key or ArtistId not set properly.")
            res.send("ERROR: Api Key or ArtistId not set properly.")
        }
    });

    //http.request();
};
/* This controller is to add seed data to the database and any other init required for development. */
/* It is restricted to run only on the dev environment */
var mongoose = require("mongoose");

var Home = require("../models/homeModel");
var Music = require("../models/musicModel");
var Transcription = require("../models/transcriptionModel");
var Biography = require("../models/biographyModel");

// For now this is dummy data. Later it will have the actual initial data for the site

var seedData = {
    home: {
        title: "Alfredo Balcacer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum blandit risus non posuere",
        homePicUrl: "/images/homepic.jpg"
    },
    music: {
        videoUrl: "/videos/musicVideo.mp4",
        musicPlaylist: [
            {
                songName: "Something Special",
                artist: "Alfredo Balcacer",
                songUrl: "/audio/song1.mp3"
            },
            {
                songName: "No More Love For Women",
                artist: "Alfredo Balcacer",
                songUrl: "/audio/song2.mp3"
            }
        ]
    },
    transcription: {
        description: "transcriptions are a way to translate a dominican rythm into other superior rytms like jazz and stuff",
        transcriptions: [
            {
                title: "Gaga to Jazz",
                videoUrl: "/videos/gagatojazz.mp4",
                description: "This is how I converted that shit into other shit",
                pdfUrl: "/pdfs/gagatojazz.pdf"
            },
            {
                title: "Palo to Blues",
                videoUrl: "/videos/palotoblues.mp4",
                description: "This is how I converted that shit into that other shit",
                pdfUrl: "/pdfs/palotoblues.pdf"
            }
        ]
    },
    biography: {
        biographyText: "I am the musician that plays the guitar and all that. I know I'm good because the guitar makes cool sounds.",
        picUrl: "/images/biograpypic.jpg",
        gear: [
            {
                gearType: "Guitars",
                items: [
                    {
                        name: "Strocaster"
                    },
                    {
                        name: "Whatever"
                    }
                ]
            },
            {
                gearType: "Pedals",
                items: [
                    {
                        name: "Distolchon"
                    },
                    {
                        name: "CoolZoundz 3000"
                    }
                ]
            }
        ]
    }

};

// I guess you need to put a file manually for things requiring files. Maybe there's a way to automate this as well, but
// for now we'll just seed the path to mongo and render the file that was put manually in public from there.
module.exports = function(app) {

    var logResult = function(err, result) {
        if(err) throw err;

        console.log(result);
    };

    app.get("/api/appSetup", function(req, res) {
        /* Add seed data */
        Home.create({
            title: seedData.home.title,
            description: seedData.home.description,
            homePicUrl: seedData.home.homePicUrl
        }, logResult);

        Music.create({
            videoUrl: seedData.music.videoUrl,
            musicPlaylist: [
                {
                    songName: seedData.music.musicPlaylist[0].songName,
                    artist: seedData.music.musicPlaylist[0].artist,
                    songUrl: seedData.music.musicPlaylist[0].songUrl
                },
                {
                    songName: seedData.music.musicPlaylist[1].songName,
                    artist: seedData.music.musicPlaylist[1].artist,
                    songUrl: seedData.music.musicPlaylist[1].songUrl
                }
            ]
        }, logResult);

        Transcription.create({
            description: seedData.transcription.description,
            transcriptions: [
                {
                    title: seedData.transcription.transcriptions[0].title,
                    videoUrl: seedData.transcription.transcriptions[0].videoUrl,
                    description: seedData.transcription.transcriptions[0].description,
                    pdfUrl: seedData.transcription.transcriptions[0].pdfUrl
                },
                {
                    title: seedData.transcription.transcriptions[1].title,
                    videoUrl: seedData.transcription.transcriptions[1].videoUrl,
                    description: seedData.transcription.transcriptions[1].description,
                    pdfUrl: seedData.transcription.transcriptions[1].pdfUrl
                }
            ]
        }, logResult);

        Biography.create({
            biographyText: seedData.biography.biographyText,
            picUrl: seedData.biography.picUrl,
            gear: [
                {
                    gearType: seedData.biography.gear[0].gearType,
                    items: [
                        {
                            name: seedData.biography.gear[0].items[0].name
                        },
                        {
                            name: seedData.biography.gear[0].items[1].name
                        }
                    ]
                },
                {
                    gearType: seedData.biography.gear[1].gearType,
                    items: [
                        {
                            name: seedData.biography.gear[1].items[0].name
                        },
                        {
                            name: seedData.biography.gear[1].items[1].name
                        }
                    ]
                }
            ]
        }, logResult);

        res.send("App Data Seeded Successfully");

    });
};
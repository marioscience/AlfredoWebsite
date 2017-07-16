/*
 *  https://developer.mozilla.org/en-US/Apps/Fundamentals/Audio_and_video_delivery/cross_browser_video_player
 *  Use the article above to create a video player that has custom controls so that it looks the same in all browsers.
 *  The goal is just not leave the video be handled by the default browser player because it tends to be different.
 *   Check if there's a way of converting videos on the server to these three formats: MP4, WebM, and Ogg. With those
 *   most browsers will be able to play the vids.
 * */

import {Component} from "@angular/core";
import {Input} from "@angular/core";

@Component({
  selector: "video-player",
  templateUrl: "./videoplayer.component.html",
  styleUrls: ["./videoplayer.component.scss"]
})
export class VideoPlayerComponent {
  @Input() src: string;
}

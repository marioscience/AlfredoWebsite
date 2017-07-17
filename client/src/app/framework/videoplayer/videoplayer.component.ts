/*
 *  https://developer.mozilla.org/en-US/Apps/Fundamentals/Audio_and_video_delivery/cross_browser_video_player
 *  Use the article above to create a video player that has custom controls so that it looks the same in all browsers.
 *  The goal is just not leave the video be handled by the default browser player because it tends to be different.
 *   Check if there's a way of converting videos on the server to these three formats: MP4, WebM, and Ogg. With those
 *   most browsers will be able to play the vids.
 *
 * */

import {Component, ElementRef, Renderer2, Inject, OnInit} from "@angular/core";
import {Input} from "@angular/core";

import {ViewChild} from "@angular/core";

import {DOCUMENT} from "@angular/common";

@Component({
  selector: "video-player",
  templateUrl: "./videoplayer.component.html",
  styleUrls: ["./videoplayer.component.scss"]
})
export class VideoPlayerComponent implements OnInit {
  @Input() src: string;
  @ViewChild("videoElement") videoView: ElementRef;
  videoElement: any;
  isPaused: boolean;
  volume: number;
  progressPercent: number;
  isFullscreenEnabled: boolean;

  constructor(private elemRef: ElementRef,
              private renderer: Renderer2,
              @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    // Get native element to use in class
    this.videoElement = this.videoView.nativeElement;
    // Set initial values to component from native element
    this.isPaused = this.videoElement.paused;
    this.volume = this.videoElement.volume;
    this.updateProgress();
    this.isFullscreenEnabled = this.checkFullscreenSupport();
    this.renderer.listen(this.videoElement, "timeupdate", () => {
      this.updateProgress()
    });
  }

  playPause(): void {
    if (this.isPaused) {
      this.videoElement.play();
    } else {
      this.videoElement.pause();
    }
    this.isPaused = this.videoElement.paused;
  }

  updateVolume(event): void {
    this.videoElement.volume = this.volume = event.value;
  }

  updateProgress(): void {
    let videoDuration = this.videoElement.duration;
    let currentTime = this.videoElement.currentTime;

    this.progressPercent = (currentTime / videoDuration) * 100;
  }

  toggleFullscreen(): void {
    /* This function tries to cover all cases for all browsers */
    if (this.isFullscreen()) {
      if (this.document.exitFullscreen) this.document.exitFullscreen();
      else if ((<any>document).mozCancelFullScreen) (<any>document).mozCancelFullScreen();
      else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
      else if ((<any>document).msExitFullscreen) (<any>document).msExitFullscreen();
    } else {
      if (this.elemRef.nativeElement.requestFullscreen) this.elemRef.nativeElement.requestFullscreen();
      else if (this.elemRef.nativeElement.mozRequestFullScreen) this.elemRef.nativeElement.mozRequestFullScreen();
      else if (this.elemRef.nativeElement.webkitRequestFullScreen) this.elemRef.nativeElement.webkitRequestFullScreen();
      else if (this.elemRef.nativeElement.msRequestFullscreen) this.elemRef.nativeElement.msRequestFullscreen();
    }
  }

  private isFullscreen(): boolean {
    // big checking for all browsers. Some cast as any because typescript doesn't recognized them.
    return !!((<any>this.document).fullScreen || this.document.webkitIsFullScreen || (<any>this.document).mozFullScreen || (<any>this.document).msFullscreenElement || this.document.fullscreenElement);
  }

  private checkFullscreenSupport(): boolean {
    // big checking for all browsers. Some cast as any because typescript doesn't recognized them.
    return !!(this.document.fullscreenEnabled || (<any>this.document).mozFullScreenEnabled || (<any>this.document).msFullscreenEnabled || (<any>this.document).webkitSupportsFullscreen || this.document.webkitFullscreenEnabled || this.document.createElement('video').webkitRequestFullScreen);
  }


}

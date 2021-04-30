// source --> https://www.crestdatasys.com/wp-content/plugins/download-manager/assets/js/front.js?ver=3.1.10 
var allps;

String.prototype.wpdm_shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}


var WPDM = {

    init: function($){

    },

    beep: function() {
        if(WPDM.audio == undefined)
            var snd = new  Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
        else
            var snd = new  Audio(WPDM.audio);
        snd.play();
    },

    uniqueID: function(){
        var uniq = Date.now()+"abcdefghijklmnopqrstuvwxyz_";
        uniq = uniq.wpdm_shuffle();
        uniq = uniq.substring(1, 10);
        return uniq;
    },

    popupWindow: function(url, title, w, h) {
        /* Fixes dual-screen position                         Most browsers      Firefox */
        var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
        var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

        var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

        var left = ((width / 2) - (w / 2)) + dualScreenLeft;
        var top = ((height / 2) - (h / 2)) + dualScreenTop;
        var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

        /* Puts focus on the newWindow */
        if (window.focus) {
            newWindow.focus();
        }

        return false;
    },

    bootAlert: function(heading, content, width) {
        var html;
        if(!width) width = 400;
        var modal_id = '__bootModal_' + WPDM.uniqueID();
        html = '<div class="w3eden" id="w3eden'+modal_id+'"><div id="'+modal_id+'" class="modal fade" tabindex="-1" role="dialog">\n' +
            '  <div class="modal-dialog" style="width: '+width+'px" role="document">\n' +
            '    <div class="modal-content" style="border-radius: 4px;overflow: hidden">\n' +
            '      <div class="modal-header" style="padding: 12px 15px;background: rgba(0,0,0,0.02);">\n' +
            '        <h4 class="modal-title" style="font-size: 10pt;font-weight: 600;padding: 0;margin: 0;font-family:Montserrat, san-serif;letter-spacing: 0.5px">'+heading+'</h4>\n' +
            '      </div>\n' +
            '      <div class="modal-body fetfont" style="line-height: 1.5;text-transform: unset;font-weight:400;letter-spacing:0.5px;font-size: 12px">\n' +
            '        '+content+'\n' +
            '      </div>\n' +
            '      <div class="modal-footer" style="padding: 10px 15px">\n' +
            '        <button type="button" class="btn btn-secondary btn-xs" data-target="#'+modal_id+'" data-dismiss="modal">Close</button>\n' +
            '      </div>\n' +
            '    </div>\n' +
            '  </div>\n' +
            '</div></div>';
        jQuery('body').append(html);
        jQuery("#"+modal_id).modal({show: true, backdrop: 'static'});
        return jQuery("#"+modal_id);
    },


    /**
     * Local push notification
     * @param title
     * @param message
     * @param icon
     * @param image
     * @param url
     */
    pushNotify: function(title, message, icon, image, url){
        if (!('Notification' in window) || !('ServiceWorkerRegistration' in window)) {
            return;
        }

        Notification.requestPermission(function (result) {
            if(result === 'granted'){
                console.log('Notification: ' + result);
                try {
                    var notification = new Notification(title, {body: message, icon: icon?icon:'https://cdn1.iconfinder.com/data/icons/hawcons/32/698558-icon-47-note-important-512.png', image: image?image:''});
                    if(url) {
                        notification.onclick = function (e) {
                            e.preventDefault();
                            window.open(url, '_blank');
                        };
                    }
                } catch (err) {
                    console.log('Notification API error: ' + err);
                }
            } else {
                console.log('Notification: ' + result);
            }
        });

    },



    /**
     * Shows notification
     * @param message
     * @param type
     * @param position
     */
    notify: function(message, type, position, autoclose){
        var $ = jQuery;
        if(type === undefined || !type) type = 'info';
        if(position === undefined || !position) position = 'top-right';
        if(type === 'danger') type = 'error';
        var notifycont = position.indexOf('#') >= 0 ? position : '#wpdm-notify-'+position ;
        if($(notifycont).length  == 0)
            $('body').prepend("<div id='wpdm-notify-"+position+"'></div>");
        var notif = $("<div class='wpdm-notify fetfont wpdm-notify-"+type+"' style='display: none'>"+message+"</div>");
        $(notifycont).append(notif);
        $(notif).fadeIn();
        if(autoclose !== undefined){
            setTimeout(function () {

                $(notif).animate({
                    opacity: 0
                }, 1000, function() {
                    $(this).slideUp();
                });

            }, autoclose);
        }
        return $(notif);
    },

    /**
     * Shows notification
     * @param message
     * @param type
     * @param position
     */
    floatify: function(html, position){
        var $ = jQuery;
        if(position === undefined || !position) position = 'top-right';
        var floatifycont = '#wpdm-floatify-'+position;
        if($(floatifycont).length  == 0)
            $('body').prepend("<div class='w3eden' id='wpdm-floatify-"+position+"'></div>");
        var floatify = $("<div class='wpdm-floatify fetfont style='margin-right: -500px'>"+html+"</div>");
        $(floatifycont).append(floatify);
        $(floatify).animate({marginRight: '0px'});
        return $(floatify);
    },

    blockUI: function(element, xhr){
        jQuery(element).addClass("blockui");
        if(xhr)
            xhr.addEventListener("load", function () {
                jQuery(element).removeClass("blockui");
            });
    },

    unblockUI: function(element){
        jQuery(element).removeClass("blockui");
    },

    overlay: function(element, html){
        var $ = jQuery;
        var overlaycontent = $("<div class='wpdm-overlay-content' style='display: none'>"+html+"<div class='wpdm-overlay-close' style='cursor: pointer'><i class='far fa-times-circle'></i> close</div></div>");
        $(element).addClass('wpdm-overlay').append(overlaycontent);
        $(overlaycontent).fadeIn();
        $('body').on('click', '.wpdm-overlay-close', function () {
            $(overlaycontent).fadeOut(function () {
                $(this).remove();
            });
        });
        return $(overlaycontent);
    },


    confirm: function(heading, content, buttons) {
        var html, $ = jQuery;
        var modal_id = '__boot_popup_' + WPDM.uniqueID();
        $("#w3eden__boot_popup").remove();
        var _buttons = '';
        if(buttons) {
            _buttons = '<div class="modal-footer" style="padding: 8px 15px;">\n';
            $.each(buttons, function (i, button) {
                var id = 'btx_' + i;
                _buttons += "<button id='" + id + "' class='" + button.class + " btn-xs' style='font-size: 10px;padding: 3px 20px;'>" + button.label + "</button> ";
            });
            _buttons += '</div>\n';
        }

        html = '<div class="w3eden" id="w3eden'+modal_id+'"><div id="'+modal_id+'" style="z-index: 9999999 !important;" class="modal fade" tabindex="-1" role="dialog">\n' +
            '  <div class="modal-dialog" role="document" style="max-width: 100%;width: 350px">\n' +
            '    <div class="modal-content" style="border-radius: 3px;overflow: hidden">\n' +
            '      <div class="modal-header" style="padding: 12px 15px;background: #f5f5f5;">\n' +
            '        <h4 class="modal-title" style="font-size: 9pt;font-weight: 500;padding: 0;margin: 0;font-family:var(--wpdm-font), san-serif;letter-spacing: 0.5px">'+heading+'</h4>\n' +
            '      </div>\n' +
            '      <div class="modal-body text-center" style="font-family:var(--wpdm-font), san-serif;letter-spacing: 0.5px;font-size: 10pt;font-weight: 300;padding: 25px;line-height: 1.5">\n' +
            '        '+content+'\n' +
            '      </div>\n' + _buttons +
            '    </div>\n' +
            '  </div>\n' +
            '</div></div>';
        $('body').append(html);
        $("#"+modal_id).modal('show');
        $.each(buttons, function (i, button) {
            var id = 'btx_'+i;
            $('#'+id).unbind('click');
            $( '#'+id).bind('click' , function () {
                button.callback.call($("#"+modal_id));
                return false;
            });
        });
        return $("#"+modal_id);
    },
    audioUI: function(audio){
        var $ = jQuery, song_length, song_length_m, song_length_s;

        if(parseInt(wpdm_asset.bsversion) !== 3)
            var player_html = '<div class="w3eden"><div style="display: none" class="wpdm-audio-player-ui" id="wpdm-audio-player-ui"><div class="card m-2"><div class="card-body text-center"><div class="media"><div class="mr-3 wpdm-audio-control-buttons"><button class="btn btn-primary btn-play" id="wpdm-btn-play"><i class="fa fa-play"></i></button> <button class="btn btn-primary btn-backward" id="wpdm-btn-backward"><i class="fa fa-backward"></i></button> <button class="btn btn-primary btn-forward" id="wpdm-btn-forward"><i class="fa fa-forward"></i></button></div><div class="media-body"><div class="position-relative"><div id="played">00:00</div><div id="mins">00:00</div></div><div class="progress"><div  id="wpdm-audio-progress" class="progress-bar bg-success" role="progressbar" style="width: 0%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div></div><div class="ml-3 wpdm-audio-control-buttons"> <button class="btn btn-info btn-volumctrl" id="wpdm-btn-volumctrl"><i class="fa fa-volume-up"></i></button> <div class="volumctrl"><input type="range" min="0" max="1" step="0.01" value="3" class="p-0" id="wpdm-audio-volume"></div></div></div></div></div></div></div>';
        else
            var player_html = '<div class="w3eden"><div style="display: none" class="wpdm-audio-player-ui" id="wpdm-audio-player-ui"><div class="panel panel-default" style="margin: 0;border: 0;border-radius: 0;border-top: 1px solid #dddddd;background: #fcfcfc"><div class="panel-body text-center"><div class="media"><div class="pull-right wpdm-audio-control-buttons"><button class="btn btn-info btn-volumctrl" id="wpdm-btn-volumctrl"><i class="fa fa-volume-up"></i></button> <div class="volumctrl"> <input type="range" min="0" max="1" step="0.01" value="3" class="p-0" id="wpdm-audio-volume"> </div></div><div class="wpdm-audio-control-buttons pull-left"><nobr><button class="btn btn-primary btn-play" id="wpdm-btn-play"><i class="fa fa-play"></i></button> <button class="btn btn-primary btn-backward" id="wpdm-btn-backward"><i class="fa fa-backward"></i></button> <button class="btn btn-primary btn-forward" id="wpdm-btn-forward"><i class="fa fa-forward"></i></button></nobr></div><div class="media-body"><div class="position-relative"><div id="played">00:00</div><div id="mins">00:00</div></div><div class="progress"><div  id="wpdm-audio-progress" class="progress-bar bg-success" role="progressbar" style="width: 0%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div></div></div></div></div></div></div>';

        if(audio.duration !== Infinity) {
            song_length = parseInt(audio.duration);
            song_length_m = parseInt(song_length / 60);
            song_length_s = song_length - (song_length_m * 60);
            song_length_m = song_length_m > 9 ? song_length_m : "0" + song_length_m;
            song_length_s = song_length_s > 9 ? song_length_s : "0" + song_length_s;
        } else {
            song_length_m = "--";
            song_length_s = "--";
            audio.addEventListener("durationchange", function (e) {
                console.log(this.duration);
                if (this.duration !== Infinity) {
                    song_length = parseInt(this.duration);
                    song_length_m = parseInt(song_length / 60);
                    song_length_s = song_length - (song_length_m * 60);
                    song_length_m = song_length_m > 9 ? song_length_m : "0" + song_length_m;
                    song_length_s = song_length_s > 9 ? song_length_s : "0" + song_length_s;
                    $('#mins').html(song_length_m+":"+song_length_s);
                    next(song_length);
                }
            }, false);
        }

        if($('#wpdm-audio-player-ui').length === 0 ){
            $('body').append(player_html);
            $("#wpdm-audio-player-ui").slideDown();
            $('#mins').html(song_length_m+":"+song_length_s);
            $('body').on('click', '#wpdm-audio-player-ui .progress', function(e){
                let value = e.offsetX * 100 / this.clientWidth;
                var played = parseInt(song_length*value/100);
                var played_m = parseInt(played/60);
                var played_s = played - (played_m*60);
                played_m = played_m > 9 ? played_m : "0"+played_m;
                played_s = played_s > 9 ? played_s : "0"+played_s;
                $('#played').html(played_m+":"+played_s);
                audio.currentTime = (song_length*value)/100;
                $(this).find('.progress-bar').css('width', value + "%");
                //video.currentTime = duration * (value / 100);
            });
            $('body').on('click', '#wpdm-btn-backward', function(){
                let value = (parseInt($('#wpdm-audio-player-ui .progress-bar').css('width'))/parseInt($('#wpdm-audio-player-ui .progress').css('width')))*100 - 10;
                if(value < 0) value = 0;
                var played = parseInt(song_length*value/100);
                var played_m = parseInt(played/60);
                var played_s = played - (played_m*60);
                played_m = played_m > 9 ? played_m : "0"+played_m;
                played_s = played_s > 9 ? played_s : "0"+played_s;
                $('#played').html(played_m+":"+played_s);
                audio.currentTime = (song_length*value)/100;
                $('#wpdm-audio-player-ui .progress-bar').css('width', value + "%");
            });
            $('body').on('click', '#wpdm-btn-forward', function(){
                let value = (parseInt($('#wpdm-audio-player-ui .progress-bar').css('width'))/parseInt($('#wpdm-audio-player-ui .progress').css('width')))*100 + 10;
                if(value > 100) value = 100;
                var played = parseInt(song_length*value/100);
                var played_m = parseInt(played/60);
                var played_s = played - (played_m*60);
                played_m = played_m > 9 ? played_m : "0"+played_m;
                played_s = played_s > 9 ? played_s : "0"+played_s;
                $('#played').html(played_m+":"+played_s);
                audio.currentTime = (song_length*value)/100;
                $('#wpdm-audio-player-ui .progress-bar').css('width', value + "%");
            });
            $('#wpdm-btn-volumctrl').on('click', function(){
                $(this).next('.volumctrl').toggle();
            });
            $('body').on('click', '.btn-play', function(){
                if($(this).find('.fa').hasClass('fa-play')) {
                    $(this).find('.fa').addClass('fa-pause').removeClass('fa-play');
                    $(this).data('state', 'playing');
                    audio.play();
                }
                else {
                    $(this).find('.fa').addClass('fa-play').removeClass('fa-pause');
                    $(this).data('state', 'paused');
                    audio.pause();
                }
            });
            $('body').on('change', '#wpdm-audio-volume', function () {
                audio.volume = this.value;
            });

        }
        $('#mins').html(song_length_m+":"+song_length_s);
        audio.addEventListener("play", function(){
            $('#wpdm-btn-play').find('.fa').addClass('fa-pause').removeClass('fa-play');
        });
        audio.addEventListener("pause", function(){
            $('#wpdm-btn-play').find('.fa').addClass('fa-play').removeClass('fa-pause');
        });
        audio.addEventListener("timeupdate", function(e){
            var song_length = parseInt(audio.duration);
            var time_now = audio.currentTime;
            var percent = (time_now/song_length)*100;
            if(percent > 100) percent = 100;
            $('#wpdm-audio-progress').css('width', percent+"%");
            var played = parseInt(time_now);
            var played_m = parseInt(played/60);
            var played_s = played - (played_m*60);
            played_m = played_m > 9 ? played_m : "0"+played_m;
            played_s = played_s > 9 ? played_s : "0"+played_s;
            $('#played').html(played_m+":"+played_s);
        });



    }

};



jQuery(function ($) {

    var $body = $('body');

    $body.on('click', '.wpdm-notify', function () {
        /* $(this).addClass('wpdm-hide-right'); */
        $(this).animate({marginRight: '-500px'}, 1000, function () {
            $(this).remove();
        });
    });

    $body.on('click', '.dismis-on-click', function () {
        $(this).slideUp();
    });

    $body.on('click', '.wpdm-download-link.wpdm-download-locked', function (e) {
        e.preventDefault();
        hideLockFrame();

        var parentWindow = document.createElement("a");
        parentWindow.href = document.referrer.toString();

        if(parentWindow.hostname === window.location.hostname || 1)
            $(window.parent.document.body).append("<iframe id='wpdm-lock-frame' style='left:0;top:0;width: 100%;height: 100%;z-index: 999999999;position: fixed;background: rgba(255,255,255,0.4) url("+wpdm_home_url+"wp-content/plugins/download-manager/assets/images/loader.svg) center center no-repeat;background-size: 80px 80px;border: 0;' src='"+wpdm_home_url+"?__wpdmlo="+$(this).data('package')+"'></iframe>");
        else
            window.parent.postMessage({
                'task': 'showiframe',
                'iframe': "<iframe id='wpdm-lock-frame' style='left:0;top:0;width: 100%;height: 100%;z-index: 999999999;position: fixed;background: rgba(255,255,255,0.4) url("+wpdm_home_url+"wp-content/plugins/download-manager/assets/images/loader.svg) center center no-repeat;background-size: 80px 80px;border: 0;' src='"+wpdm_home_url+"?__wpdmlo="+$(this).data('package')+"'></iframe>"
            }, "*");

    });

    $body.on('click', '.wpdm-download-link.download-on-click', function (e) {
        e.preventDefault();
        window.location.href = $(this).data('downloadurl');
    });

    $body.on('click', '.__wpdm_playvideo', function (e) {
        e.preventDefault();
        $('#__wpdm_videoplayer').children('source').attr('src', $(this).data('video'));
        console.log('loading...');
        var vid = document.getElementById("__wpdm_videoplayer");
        vid.onloadeddata = function() {
            console.log('loaded....');
        };
        $("#__wpdm_videoplayer").get(0).load();

    });

    $body.on('change', '.terms_checkbox', function (e) {
        if($(this).is(':checked'))
            $('#wpdm-filelist-'+$(this).data('pid')+' .btn.inddl, #xfilelist .btn.inddl').removeAttr('disabled');
        else
            $('#wpdm-filelist-'+$(this).data('pid')+' .btn.inddl, #xfilelist .btn.inddl').attr('disabled', 'disabled');
    });

    $body.on('click', '.wpdm-social-lock', function (e) {

        try {


            _PopupCenter($(this).data('url'), 'Social Lock', 600, 400);

        }catch(e){}

    });

    $body.on('click', '#wpdm-dashboard-sidebar a.list-group-item', function (e) {
        location.href = this.href;
    });

    var $input_group_input = $('.input-group input');
    $input_group_input.on('focus', function () {
        $(this).parent('.input-group').find('.input-group-addon').addClass('input-group-addon-active');
    });
    $input_group_input.on('blur', function () {
        $(this).parent().find('.input-group-addon').removeClass('input-group-addon-active');
    });


    $body.on('click', 'button.btn.inddl', function (e) {
        e.preventDefault();
        var tis = this;
        if($(this).data('dlurl') !== undefined){
            location.href = $(this).data('dlurl');
            return;
        }
        $.post( wpdm_ajax_url, {
            action: 'wpdm_verify_file_pass',
            wpdmfileid: $(tis).data('pid'),
            wpdmfile: $(tis).data('file'),
            actioninddlpvr: 1,
            filepass: $($(tis).data('pass')).val()
        }, function (res) {
            if (res.error === '') {
                var dlurl = res.downloadurl;
                $(tis).data('dlurl', dlurl);
                wpdm_boot_popup("Password Verified!", "<div style='padding: 50px;'>Please click following button to start download.<br/><br/><a href='"+dlurl+"' class='btn btn-lg btn-success' target='_blank'>Start Download</a></div>",
                    [{
                        label: 'Close',
                        class: 'btn btn-secondary',
                        callback: function () {
                            this.modal('hide');
                            return false;
                        }
                    }]
                );
            }
        });
    });

    $body.on('click', '.wpdm-download-locked.pop-over', function () {
        var $dc = $($(this).attr('href'));
        var prts = $(this).attr('href').split('_');
        var pid = prts[1];

        if ($(this).attr('data-ready') === undefined || $(this).attr('data-ready') === 'hide') {

            $(this).popover({
                placement: 'bottom',
                html: true,
                content: function () {

                    if(wpdm_ajax_popup === 1)
                        return "<div id='popcnt_"+pid+"'><i class='fa fa-refresh fa-spin'></i> Loading...</div>"+'<div style="padding-top: 10px;border-top: 1px solid #eeeeee;text-align: right"><button class="btn btn-danger btn-xs po-close" s><i class="fa fa-times-circle"></i> Close</button></div>';

                    else
                        return $dc.html()+'<div style="padding-top: 10px;border-top: 1px solid #eeeeee;text-align: right"><button class="btn btn-danger btn-xs po-close" s><i class="fa fa-times-circle"></i> Close</button></div>';


                }
            });
            $(this).popover('show');

            if(wpdm_ajax_popup === 1)
                $("#popcnt_"+pid).load(ajax_url,{action:'showLockOptions',id:pid});

            $(this).data('ready', 'show');
        } else {
            $(this).popover('hide');
            $(this).date('ready', 'hide');
        }

        return false;
    });



    $body.on('click', '.wpdm-indir', function (e) {
        e.preventDefault();
        WPDM.blockUI('#xfilelist');
        $('#xfilelist').load(location.href, {
            action: 'wpdmfilelistcd',
            pid: $(this).data('pid'),
            cd: $(this).data('dir')
        }, function (res) {
            WPDM.unblockUI('#xfilelist');
        });
    });


    $body.on('click', '.role-tabs a', function (e) {
        $('.role-tabs a').removeClass('active');
        $(this).addClass('active');
    });



    $body.on('click', '.btn-wpdm-a2f', function (e) {
        var a2fbtn = $(this);
        $.post(ajax_url, {action: 'wpdm_addtofav', pid: $(this).data('package')}, function (res) {
            if(a2fbtn.hasClass('btn-secondary'))
                a2fbtn.removeClass('btn-secondary').addClass('btn-danger').html(a2fbtn.data('rlabel'));
            else
                a2fbtn.removeClass('btn-danger').addClass('btn-secondary').html(a2fbtn.data('alabel'));
        });
    });

    $body.on('click', '.wpdm-btn-play', function (e) {
        e.preventDefault();

        if($('#wpdm-audio-player').length === 0) {
            var player = document.createElement('audio');
            player.id = 'wpdm-audio-player';
            player.controls = 'controls';
            player.autoplay = 1;
            player.type = 'audio/mpeg';
            $('body').append(player);
        }

        player = $('#wpdm-audio-player');
        var btn = $(this);

        if (btn.data('state') === 'stop' || !btn.data('state')) {
            player.css('display', 'none');
            player.attr('src', $(this).data('song') + "&play=song.mp3");
        }

        if (btn.data('state') === 'playing') {
            $(this).data('state', 'paused');
            player.trigger('pause');
            $(this).html("<i class='fa fa-play'></i>");
            return false;
        }

        if (btn.data('state') === 'paused') {
            $(this).data('state', 'playing');
            player.trigger('play');
            $('.wpdm-btn-play').html("<i class='fa fa-play'></i>");
            $(this).html("<i class='fa fa-pause'></i>");
            return false;
        }


        $('.wpdm-btn-play').data("state", "stop");
        $('.wpdm-btn-play').html("<i class='fa fa-play'></i>");
        btn.html("<i class='fas fa-sun  fa-spin'></i>");
        player.unbind('loadedmetadata');
        player.on('loadedmetadata', function () {
            console.log("Playing " + this.src + ", for: " + this.duration + "seconds.");
            btn.html("<i class='fa fa-pause'></i>");
            btn.data('state', 'playing');
            WPDM.audioUI(this);
        });
        document.getElementById('wpdm-audio-player').onended = function () {
            btn.html("<i class='fa fa-redo'></i>");
            btn.data('state', 'stop');
        }
    });

    $('.wpdm_remove_empty').remove();

    /* Uploading files */
    var file_frame, dfield;

    $body.on('click', '.wpdm-media-upload', function (event) {
        event.preventDefault();
        dfield = $($(this).attr('rel'));

        /* If the media frame already exists, reopen it. */
        if (file_frame) {
            file_frame.open();
            return;
        }

        /* Create the media frame. */
        file_frame = wp.media.frames.file_frame = wp.media({
            title: $(this).data('uploader_title'),
            button: {
                text: $(this).data('uploader_button_text')
            },
            multiple: false  /* Set to true to allow multiple files to be selected */
        });

        /* When an image is selected, run a callback. */
        file_frame.on('select', function () {
            /* We set multiple to false so only get one image from the uploader */
            attachment = file_frame.state().get('selection').first().toJSON();
            dfield.val(attachment.url);

        });

        /* Finally, open the modal */
        file_frame.open();
    });

    $body.on('click', '.btn-image-selector' , function( event ){
        event.preventDefault();
        dfield = $($(this).attr('rel'));
        var dfield_h = $($(this).attr('rel')+'_hidden');

        if ( file_frame ) {
            file_frame.open();
            return;
        }

        file_frame = wp.media.frames.file_frame = wp.media({
            title: $( this ).data( 'uploader_title' ),
            button: {
                text: $( this ).data( 'uploader_button_text' )
            },
            multiple: false
        });


        file_frame.on( 'select', function() {

            attachment = file_frame.state().get('selection').first().toJSON();
            dfield.attr('src', attachment.url);
            dfield_h.val(attachment.url);

        });

        file_frame.open();
    });

    $body.on('click', '.pagination.async a, .__wpdm_load_async', function (e) {
        e.preventDefault();
        var _cont = $(this).data('container');
        $(_cont).addClass('blockui');
        $.get(this.href, function (res) {
            $(_cont).html($(res).find(_cont).html());
            $(_cont).removeClass('blockui');
        });
    });

    $('.__wpdm_submit_async').on('submit', function (e) {
        e.preventDefault();
        var _cont = $(this).data('container');
        $(_cont).addClass('blockui');
        $(this).ajaxSubmit({
            success: function (response) {
                $(_cont).html($(response).find(_cont).html());
                $(_cont).removeClass('blockui');
            }
        })
    });



    var unlocked = [];

    $('.wpdm-filelist-area[data-termlock]').on('mouseover', function () {

        try {
            if (unlocked[$(this).data('packageid')] === 1) return;
        } catch (e) {

        }
        $('#term-panel-' + $(this).data('packageid')).fadeIn('fast');
    });

    $('.terms_checkbox').on('click', function () {
        if($(this).is(':checked')){
            unlocked[$(this).data('pid')] = 1;
            $('#term-panel-' + $(this).data('pid')).fadeOut('fast');
            $('.download_footer_'+$(this).data('pid')).slideDown();
        }
        else
            $('.download_footer_'+$(this).data('pid')).slideUp();
    });


    $formcontrol = $('.input-wrapper input');
    $formcontrol.on('focus', function () {
        $('.input-wrapper').removeClass('input-focused');
        $(this).parent('.input-wrapper').addClass('input-focused');
    });
    $formcontrol.on('change', function () {
        $('.input-wrapper').removeClass('input-focused');
        $(this).parent('.input-wrapper').addClass('input-focused');
        if($(this).val() !== '')
            $(this).parent('.input-wrapper').addClass('input-withvalue');
        else
            $(this).parent('.input-wrapper').removeClass('input-withvalue');
    });

});

function _PopupCenter(url, title, w, h) {
    /* Fixes dual-screen position                         Most browsers      Firefox */
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    /* Puts focus on the newWindow */
    if (window.focus) {
        newWindow.focus();
    }

    return false;
}

function generatepass(id){
    tb_show('Generate Password',ajaxurl+'?action=wpdm_generate_password&id='+id);
}

function hideLockFrame() {
    jQuery('#wpdm-lock-frame').remove();
}

function wpdm_bootModal(heading, content, width) {
    var html;
    if(!width) width = 400;
    jQuery("#w3eden__bootModal").remove();
    html = '<div class="w3eden" id="w3eden__bootModal"><div id="__bootModal" class="modal fade" tabindex="-1" role="dialog">\n' +
        '  <div class="modal-dialog" style="width: '+width+'px" role="document">\n' +
        '    <div class="modal-content" style="border-radius: 3px;overflow: hidden">\n' +
        '      <div class="modal-header" style="padding: 12px 15px;background: #f5f5f5;">\n' +
        '        <h4 class="modal-title" style="font-size: 9pt;font-weight: 500;padding: 0;margin: 0;font-family:Montserrat, san-serif;letter-spacing: 0.5px">'+heading+'</h4>\n' +
        '      </div>\n' +
        '      <div class="modal-body fetfont" style="line-height: 1.5;text-transform: unset;font-weight:400;letter-spacing:0.5px;font-size: 12px">\n' +
        '        '+content+'\n' +
        '      </div>\n' +
        '      <div class="modal-footer" style="padding: 10px 15px">\n' +
        '        <button type="button" class="btn btn-secondary btn-xs" data-dismiss="modal">Close</button>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</div></div>';
    jQuery('body').append(html);
    jQuery("#__bootModal").modal('show');
}

function wpdm_boot_popup(heading, content, buttons) {
    var html, $ = jQuery;
    $("#w3eden__boot_popup").remove();
    var _buttons = '';
    if(buttons) {
        _buttons = '<div class="modal-footer" style="padding: 8px 15px;">\n';
        $.each(buttons, function (i, button) {
            var id = 'btx_' + i;
            _buttons += "<button id='" + id + "' class='" + button.class + " btn-xs' style='font-size: 10px;padding: 3px 20px;'>" + button.label + "</button> ";
        });
        _buttons += '</div>\n';
    }

    html = '<div class="w3eden" id="w3eden__boot_popup"><div id="__boot_popup" style="z-index: 9999999 !important;" class="modal fade" tabindex="-1" role="dialog">\n' +
        '  <div class="modal-dialog" role="document" style="max-width: 100%;width: 350px">\n' +
        '    <div class="modal-content" style="border-radius: 3px;overflow: hidden">\n' +
        '      <div class="modal-header" style="padding: 12px 15px;background: #f5f5f5;">\n' +
        '        <h4 class="modal-title" style="font-size: 9pt;font-weight: 500;padding: 0;margin: 0;font-family:Montserrat, san-serif;letter-spacing: 0.5px">'+heading+'</h4>\n' +
        '      </div>\n' +
        '      <div class="modal-body text-center" style="letter-spacing: 0.5px;font-size: 10pt;font-weight: 300;padding: 25px;line-height: 1.5">\n' +
        '        '+content+'\n' +
        '      </div>\n' + _buttons +
        '    </div>\n' +
        '  </div>\n' +
        '</div></div>';
    $('body').append(html);
    $("#__boot_popup").modal('show');
    $.each(buttons, function (i, button) {
        var id = 'btx_'+i;
        $('#'+id).unbind('click');
        $( '#'+id).bind('click' , function () {
            button.callback.call($("#__boot_popup"));
            return false;
        });
    });
    return $("#__boot_popup");
}

/**
 * Open an url in iframe modal
 * @param url
 * @param closebutton
 * @returns {boolean}
 */
function wpdm_iframe_modal(url, closebutton) {
    var iframe, $ = jQuery;
    if(url === 'close') {
        $('#wpdm_iframe_modal').remove();
        $('#ifcb').remove();
        $('body').removeClass('wpdm-iframe-modal-open');
        return false;
    }
    var closebutton_html = "";
    if(closebutton !== undefined && closebutton === true)
        closebutton_html = "<span id='ifcb' class='w3eden'><a href='#' onclick='return wpdm_iframe_modal(\"close\");' style='border-radius: 0;position: fixed;top: 0;right: 0;z-index: 9999999999 !important;width: 40px;line-height: 40px;padding: 0' class='btn btn-danger'><i class='fas fa-times'></i></a></span>";

    iframe = '<iframe src="'+url+'" style="width: 100%;height: 100%;position: fixed;z-index: 999999999 !important;border: 0;left: 0;top: 0;right: 0;bottom: 0;background: rgba(0,0,0,0.2);display: none;" id="wpdm_iframe_modal"></iframe>'+closebutton_html;
    $('body').append(iframe).addClass('wpdm-iframe-modal-open');
    $('#wpdm_iframe_modal').fadeIn();

};
// source --> https://www.crestdatasys.com/wp-content/plugins/download-manager/assets/js/chosen.jquery.min.js?ver=5.3.6 
/*!
 Chosen, a Select Box Enhancer for jQuery and Prototype
 by Patrick Filler for Harvest, http://getharvest.com

 Version 1.4.2
 Full source at https://github.com/harvesthq/chosen
 Copyright (c) 2011-2015 Harvest http://getharvest.com

 MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
 This file is generated by `grunt build`, do not edit it by hand.
 */

(function() {
    var $, AbstractChosen, Chosen, SelectParser, _ref,
        __hasProp = {}.hasOwnProperty,
        __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

    SelectParser = (function() {
        function SelectParser() {
            this.options_index = 0;
            this.parsed = [];
        }

        SelectParser.prototype.add_node = function(child) {
            if (child.nodeName.toUpperCase() === "OPTGROUP") {
                return this.add_group(child);
            } else {
                return this.add_option(child);
            }
        };

        SelectParser.prototype.add_group = function(group) {
            var group_position, option, _i, _len, _ref, _results;
            group_position = this.parsed.length;
            this.parsed.push({
                array_index: group_position,
                group: true,
                label: this.escapeExpression(group.label),
                title: group.title ? group.title : void 0,
                children: 0,
                disabled: group.disabled,
                classes: group.className
            });
            _ref = group.childNodes;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                option = _ref[_i];
                _results.push(this.add_option(option, group_position, group.disabled));
            }
            return _results;
        };

        SelectParser.prototype.add_option = function(option, group_position, group_disabled) {
            if (option.nodeName.toUpperCase() === "OPTION") {
                if (option.text !== "") {
                    if (group_position != null) {
                        this.parsed[group_position].children += 1;
                    }
                    this.parsed.push({
                        array_index: this.parsed.length,
                        options_index: this.options_index,
                        value: option.value,
                        text: option.text,
                        html: option.innerHTML,
                        title: option.title ? option.title : void 0,
                        selected: option.selected,
                        disabled: group_disabled === true ? group_disabled : option.disabled,
                        group_array_index: group_position,
                        group_label: group_position != null ? this.parsed[group_position].label : null,
                        classes: option.className,
                        style: option.style.cssText
                    });
                } else {
                    this.parsed.push({
                        array_index: this.parsed.length,
                        options_index: this.options_index,
                        empty: true
                    });
                }
                return this.options_index += 1;
            }
        };

        SelectParser.prototype.escapeExpression = function(text) {
            var map, unsafe_chars;
            if ((text == null) || text === false) {
                return "";
            }
            if (!/[\&\<\>\"\'\`]/.test(text)) {
                return text;
            }
            map = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            };
            unsafe_chars = /&(?!\w+;)|[\<\>\"\'\`]/g;
            return text.replace(unsafe_chars, function(chr) {
                return map[chr] || "&amp;";
            });
        };

        return SelectParser;

    })();

    SelectParser.select_to_array = function(select) {
        var child, parser, _i, _len, _ref;
        parser = new SelectParser();
        _ref = select.childNodes;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            child = _ref[_i];
            parser.add_node(child);
        }
        return parser.parsed;
    };

    AbstractChosen = (function() {
        function AbstractChosen(form_field, options) {
            this.form_field = form_field;
            this.options = options != null ? options : {};
            if (!AbstractChosen.browser_is_supported()) {
                return;
            }
            this.is_multiple = this.form_field.multiple;
            this.set_default_text();
            this.set_default_values();
            this.setup();
            this.set_up_html();
            this.register_observers();
            this.on_ready();
        }

        AbstractChosen.prototype.set_default_values = function() {
            var _this = this;
            this.click_test_action = function(evt) {
                return _this.test_active_click(evt);
            };
            this.activate_action = function(evt) {
                return _this.activate_field(evt);
            };
            this.active_field = false;
            this.mouse_on_container = false;
            this.results_showing = false;
            this.result_highlighted = null;
            this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
            this.disable_search_threshold = this.options.disable_search_threshold || 0;
            this.disable_search = this.options.disable_search || false;
            this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;
            this.group_search = this.options.group_search != null ? this.options.group_search : true;
            this.search_contains = this.options.search_contains || false;
            this.single_backstroke_delete = this.options.single_backstroke_delete != null ? this.options.single_backstroke_delete : true;
            this.max_selected_options = this.options.max_selected_options || Infinity;
            this.inherit_select_classes = this.options.inherit_select_classes || false;
            this.display_selected_options = this.options.display_selected_options != null ? this.options.display_selected_options : true;
            this.display_disabled_options = this.options.display_disabled_options != null ? this.options.display_disabled_options : true;
            return this.include_group_label_in_selected = this.options.include_group_label_in_selected || false;
        };

        AbstractChosen.prototype.set_default_text = function() {
            if (this.form_field.getAttribute("data-placeholder")) {
                this.default_text = this.form_field.getAttribute("data-placeholder");
            } else if (this.is_multiple) {
                this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text;
            } else {
                this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text;
            }
            return this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text;
        };

        AbstractChosen.prototype.choice_label = function(item) {
            if (this.include_group_label_in_selected && (item.group_label != null)) {
                return "<b class='group-name'>" + item.group_label + "</b>" + item.html;
            } else {
                return item.html;
            }
        };

        AbstractChosen.prototype.mouse_enter = function() {
            return this.mouse_on_container = true;
        };

        AbstractChosen.prototype.mouse_leave = function() {
            return this.mouse_on_container = false;
        };

        AbstractChosen.prototype.input_focus = function(evt) {
            var _this = this;
            if (this.is_multiple) {
                if (!this.active_field) {
                    return setTimeout((function() {
                        return _this.container_mousedown();
                    }), 50);
                }
            } else {
                if (!this.active_field) {
                    return this.activate_field();
                }
            }
        };

        AbstractChosen.prototype.input_blur = function(evt) {
            var _this = this;
            if (!this.mouse_on_container) {
                this.active_field = false;
                return setTimeout((function() {
                    return _this.blur_test();
                }), 100);
            }
        };

        AbstractChosen.prototype.results_option_build = function(options) {
            var content, data, _i, _len, _ref;
            content = '';
            _ref = this.results_data;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                data = _ref[_i];
                if (data.group) {
                    content += this.result_add_group(data);
                } else {
                    content += this.result_add_option(data);
                }
                if (options != null ? options.first : void 0) {
                    if (data.selected && this.is_multiple) {
                        this.choice_build(data);
                    } else if (data.selected && !this.is_multiple) {
                        this.single_set_selected_text(this.choice_label(data));
                    }
                }
            }
            return content;
        };

        AbstractChosen.prototype.result_add_option = function(option) {
            var classes, option_el;
            if (!option.search_match) {
                return '';
            }
            if (!this.include_option_in_results(option)) {
                return '';
            }
            classes = [];
            if (!option.disabled && !(option.selected && this.is_multiple)) {
                classes.push("active-result");
            }
            if (option.disabled && !(option.selected && this.is_multiple)) {
                classes.push("disabled-result");
            }
            if (option.selected) {
                classes.push("result-selected");
            }
            if (option.group_array_index != null) {
                classes.push("group-option");
            }
            if (option.classes !== "") {
                classes.push(option.classes);
            }
            option_el = document.createElement("li");
            option_el.className = classes.join(" ");
            option_el.style.cssText = option.style;
            option_el.setAttribute("data-option-array-index", option.array_index);
            option_el.innerHTML = option.search_text;
            if (option.title) {
                option_el.title = option.title;
            }
            return this.outerHTML(option_el);
        };

        AbstractChosen.prototype.result_add_group = function(group) {
            var classes, group_el;
            if (!(group.search_match || group.group_match)) {
                return '';
            }
            if (!(group.active_options > 0)) {
                return '';
            }
            classes = [];
            classes.push("group-result");
            if (group.classes) {
                classes.push(group.classes);
            }
            group_el = document.createElement("li");
            group_el.className = classes.join(" ");
            group_el.innerHTML = group.search_text;
            if (group.title) {
                group_el.title = group.title;
            }
            return this.outerHTML(group_el);
        };

        AbstractChosen.prototype.results_update_field = function() {
            this.set_default_text();
            if (!this.is_multiple) {
                this.results_reset_cleanup();
            }
            this.result_clear_highlight();
            this.results_build();
            if (this.results_showing) {
                return this.winnow_results();
            }
        };

        AbstractChosen.prototype.reset_single_select_options = function() {
            var result, _i, _len, _ref, _results;
            _ref = this.results_data;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                result = _ref[_i];
                if (result.selected) {
                    _results.push(result.selected = false);
                } else {
                    _results.push(void 0);
                }
            }
            return _results;
        };

        AbstractChosen.prototype.results_toggle = function() {
            if (this.results_showing) {
                return this.results_hide();
            } else {
                return this.results_show();
            }
        };

        AbstractChosen.prototype.results_search = function(evt) {
            if (this.results_showing) {
                return this.winnow_results();
            } else {
                return this.results_show();
            }
        };

        AbstractChosen.prototype.winnow_results = function() {
            var escapedSearchText, option, regex, results, results_group, searchText, startpos, text, zregex, _i, _len, _ref;
            this.no_results_clear();
            results = 0;
            searchText = this.get_search_text();
            escapedSearchText = searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
            zregex = new RegExp(escapedSearchText, 'i');
            regex = this.get_search_regex(escapedSearchText);
            _ref = this.results_data;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                option = _ref[_i];
                option.search_match = false;
                results_group = null;
                if (this.include_option_in_results(option)) {
                    if (option.group) {
                        option.group_match = false;
                        option.active_options = 0;
                    }
                    if ((option.group_array_index != null) && this.results_data[option.group_array_index]) {
                        results_group = this.results_data[option.group_array_index];
                        if (results_group.active_options === 0 && results_group.search_match) {
                            results += 1;
                        }
                        results_group.active_options += 1;
                    }
                    option.search_text = option.group ? option.label : option.html;
                    if (!(option.group && !this.group_search)) {
                        option.search_match = this.search_string_match(option.search_text, regex);
                        if (option.search_match && !option.group) {
                            results += 1;
                        }
                        if (option.search_match) {
                            if (searchText.length) {
                                startpos = option.search_text.search(zregex);
                                text = option.search_text.substr(0, startpos + searchText.length) + '</em>' + option.search_text.substr(startpos + searchText.length);
                                option.search_text = text.substr(0, startpos) + '<em>' + text.substr(startpos);
                            }
                            if (results_group != null) {
                                results_group.group_match = true;
                            }
                        } else if ((option.group_array_index != null) && this.results_data[option.group_array_index].search_match) {
                            option.search_match = true;
                        }
                    }
                }
            }
            this.result_clear_highlight();
            if (results < 1 && searchText.length) {
                this.update_results_content("");
                return this.no_results(searchText);
            } else {
                this.update_results_content(this.results_option_build());
                return this.winnow_results_set_highlight();
            }
        };

        AbstractChosen.prototype.get_search_regex = function(escaped_search_string) {
            var regex_anchor;
            regex_anchor = this.search_contains ? "" : "^";
            return new RegExp(regex_anchor + escaped_search_string, 'i');
        };

        AbstractChosen.prototype.search_string_match = function(search_string, regex) {
            var part, parts, _i, _len;
            if (regex.test(search_string)) {
                return true;
            } else if (this.enable_split_word_search && (search_string.indexOf(" ") >= 0 || search_string.indexOf("[") === 0)) {
                parts = search_string.replace(/\[|\]/g, "").split(" ");
                if (parts.length) {
                    for (_i = 0, _len = parts.length; _i < _len; _i++) {
                        part = parts[_i];
                        if (regex.test(part)) {
                            return true;
                        }
                    }
                }
            }
        };

        AbstractChosen.prototype.choices_count = function() {
            var option, _i, _len, _ref;
            if (this.selected_option_count != null) {
                return this.selected_option_count;
            }
            this.selected_option_count = 0;
            _ref = this.form_field.options;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                option = _ref[_i];
                if (option.selected) {
                    this.selected_option_count += 1;
                }
            }
            return this.selected_option_count;
        };

        AbstractChosen.prototype.choices_click = function(evt) {
            evt.preventDefault();
            if (!(this.results_showing || this.is_disabled)) {
                return this.results_show();
            }
        };

        AbstractChosen.prototype.keyup_checker = function(evt) {
            var stroke, _ref;
            stroke = (_ref = evt.which) != null ? _ref : evt.keyCode;
            this.search_field_scale();
            switch (stroke) {
                case 8:
                    if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) {
                        return this.keydown_backstroke();
                    } else if (!this.pending_backstroke) {
                        this.result_clear_highlight();
                        return this.results_search();
                    }
                    break;
                case 13:
                    evt.preventDefault();
                    if (this.results_showing) {
                        return this.result_select(evt);
                    }
                    break;
                case 27:
                    if (this.results_showing) {
                        this.results_hide();
                    }
                    return true;
                case 9:
                case 38:
                case 40:
                case 16:
                case 91:
                case 17:
                    break;
                default:
                    return this.results_search();
            }
        };

        AbstractChosen.prototype.clipboard_event_checker = function(evt) {
            var _this = this;
            return setTimeout((function() {
                return _this.results_search();
            }), 50);
        };

        AbstractChosen.prototype.container_width = function() {
            if (this.options.width != null) {
                return this.options.width;
            } else {
                return "" + this.form_field.offsetWidth + "px";
            }
        };

        AbstractChosen.prototype.include_option_in_results = function(option) {
            if (this.is_multiple && (!this.display_selected_options && option.selected)) {
                return false;
            }
            if (!this.display_disabled_options && option.disabled) {
                return false;
            }
            if (option.empty) {
                return false;
            }
            return true;
        };

        AbstractChosen.prototype.search_results_touchstart = function(evt) {
            this.touch_started = true;
            return this.search_results_mouseover(evt);
        };

        AbstractChosen.prototype.search_results_touchmove = function(evt) {
            this.touch_started = false;
            return this.search_results_mouseout(evt);
        };

        AbstractChosen.prototype.search_results_touchend = function(evt) {
            if (this.touch_started) {
                return this.search_results_mouseup(evt);
            }
        };

        AbstractChosen.prototype.outerHTML = function(element) {
            var tmp;
            if (element.outerHTML) {
                return element.outerHTML;
            }
            tmp = document.createElement("div");
            tmp.appendChild(element);
            return tmp.innerHTML;
        };

        AbstractChosen.browser_is_supported = function() {
            if (window.navigator.appName === "Microsoft Internet Explorer") {
                return document.documentMode >= 8;
            }
            if (/iP(od|hone)/i.test(window.navigator.userAgent)) {
                return false;
            }
            if (/Android/i.test(window.navigator.userAgent)) {
                if (/Mobile/i.test(window.navigator.userAgent)) {
                    return false;
                }
            }
            return true;
        };

        AbstractChosen.default_multiple_text = "Select Some Options";

        AbstractChosen.default_single_text = "Select an Option";

        AbstractChosen.default_no_result_text = "No results match";

        return AbstractChosen;

    })();

    $ = jQuery;

    $.fn.extend({
        chosen: function(options) {
            if (!AbstractChosen.browser_is_supported()) {
                return this;
            }
            return this.each(function(input_field) {
                var $this, chosen;
                $this = $(this);
                chosen = $this.data('chosen');
                if (options === 'destroy' && chosen instanceof Chosen) {
                    chosen.destroy();
                } else if (!(chosen instanceof Chosen)) {
                    $this.data('chosen', new Chosen(this, options));
                }
            });
        }
    });

    Chosen = (function(_super) {
        __extends(Chosen, _super);

        function Chosen() {
            _ref = Chosen.__super__.constructor.apply(this, arguments);
            return _ref;
        }

        Chosen.prototype.setup = function() {
            this.form_field_jq = $(this.form_field);
            this.current_selectedIndex = this.form_field.selectedIndex;
            return this.is_rtl = this.form_field_jq.hasClass("chosen-rtl");
        };

        Chosen.prototype.set_up_html = function() {
            var container_classes, container_props;
            container_classes = ["chosen-container"];
            container_classes.push("chosen-container-" + (this.is_multiple ? "multi" : "single"));
            if (this.inherit_select_classes && this.form_field.className) {
                container_classes.push(this.form_field.className);
            }
            if (this.is_rtl) {
                container_classes.push("chosen-rtl");
            }
            container_props = {
                'class': container_classes.join(' '),
                'style': "width: " + (this.container_width()) + ";",
                'title': this.form_field.title
            };
            if (this.form_field.id.length) {
                container_props.id = this.form_field.id.replace(/[^\w]/g, '_') + "_chosen";
            }
            this.container = $("<div />", container_props);
            if (this.is_multiple) {
                this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>');
            } else {
                this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>');
            }
            this.form_field_jq.hide().after(this.container);
            this.dropdown = this.container.find('div.chosen-drop').first();
            this.search_field = this.container.find('input').first();
            this.search_results = this.container.find('ul.chosen-results').first();
            this.search_field_scale();
            this.search_no_results = this.container.find('li.no-results').first();
            if (this.is_multiple) {
                this.search_choices = this.container.find('ul.chosen-choices').first();
                this.search_container = this.container.find('li.search-field').first();
            } else {
                this.search_container = this.container.find('div.chosen-search').first();
                this.selected_item = this.container.find('.chosen-single').first();
            }
            this.results_build();
            this.set_tab_index();
            return this.set_label_behavior();
        };

        Chosen.prototype.on_ready = function() {
            return this.form_field_jq.trigger("chosen:ready", {
                chosen: this
            });
        };

        Chosen.prototype.register_observers = function() {
            var _this = this;
            this.container.bind('touchstart.chosen', function(evt) {
                _this.container_mousedown(evt);
                return evt.preventDefault();
            });
            this.container.bind('touchend.chosen', function(evt) {
                _this.container_mouseup(evt);
                return evt.preventDefault();
            });
            this.container.bind('mousedown.chosen', function(evt) {
                _this.container_mousedown(evt);
            });
            this.container.bind('mouseup.chosen', function(evt) {
                _this.container_mouseup(evt);
            });
            this.container.bind('mouseenter.chosen', function(evt) {
                _this.mouse_enter(evt);
            });
            this.container.bind('mouseleave.chosen', function(evt) {
                _this.mouse_leave(evt);
            });
            this.search_results.bind('mouseup.chosen', function(evt) {
                _this.search_results_mouseup(evt);
            });
            this.search_results.bind('mouseover.chosen', function(evt) {
                _this.search_results_mouseover(evt);
            });
            this.search_results.bind('mouseout.chosen', function(evt) {
                _this.search_results_mouseout(evt);
            });
            this.search_results.bind('mousewheel.chosen DOMMouseScroll.chosen', function(evt) {
                _this.search_results_mousewheel(evt);
            });
            this.search_results.bind('touchstart.chosen', function(evt) {
                _this.search_results_touchstart(evt);
            });
            this.search_results.bind('touchmove.chosen', function(evt) {
                _this.search_results_touchmove(evt);
            });
            this.search_results.bind('touchend.chosen', function(evt) {
                _this.search_results_touchend(evt);
            });
            this.form_field_jq.bind("chosen:updated.chosen", function(evt) {
                _this.results_update_field(evt);
            });
            this.form_field_jq.bind("chosen:activate.chosen", function(evt) {
                _this.activate_field(evt);
            });
            this.form_field_jq.bind("chosen:open.chosen", function(evt) {
                _this.container_mousedown(evt);
            });
            this.form_field_jq.bind("chosen:close.chosen", function(evt) {
                _this.input_blur(evt);
            });
            this.search_field.bind('blur.chosen', function(evt) {
                _this.input_blur(evt);
            });
            this.search_field.bind('keyup.chosen', function(evt) {
                _this.keyup_checker(evt);
            });
            this.search_field.bind('keydown.chosen', function(evt) {
                _this.keydown_checker(evt);
            });
            this.search_field.bind('focus.chosen', function(evt) {
                _this.input_focus(evt);
            });
            this.search_field.bind('cut.chosen', function(evt) {
                _this.clipboard_event_checker(evt);
            });
            this.search_field.bind('paste.chosen', function(evt) {
                _this.clipboard_event_checker(evt);
            });
            if (this.is_multiple) {
                return this.search_choices.bind('click.chosen', function(evt) {
                    _this.choices_click(evt);
                });
            } else {
                return this.container.bind('click.chosen', function(evt) {
                    evt.preventDefault();
                });
            }
        };

        Chosen.prototype.destroy = function() {
            $(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action);
            if (this.search_field[0].tabIndex) {
                this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex;
            }
            this.container.remove();
            this.form_field_jq.removeData('chosen');
            return this.form_field_jq.show();
        };

        Chosen.prototype.search_field_disabled = function() {
            this.is_disabled = this.form_field_jq[0].disabled;
            if (this.is_disabled) {
                this.container.addClass('chosen-disabled');
                this.search_field[0].disabled = true;
                if (!this.is_multiple) {
                    this.selected_item.unbind("focus.chosen", this.activate_action);
                }
                return this.close_field();
            } else {
                this.container.removeClass('chosen-disabled');
                this.search_field[0].disabled = false;
                if (!this.is_multiple) {
                    return this.selected_item.bind("focus.chosen", this.activate_action);
                }
            }
        };

        Chosen.prototype.container_mousedown = function(evt) {
            if (!this.is_disabled) {
                if (evt && evt.type === "mousedown" && !this.results_showing) {
                    evt.preventDefault();
                }
                if (!((evt != null) && ($(evt.target)).hasClass("search-choice-close"))) {
                    if (!this.active_field) {
                        if (this.is_multiple) {
                            this.search_field.val("");
                        }
                        $(this.container[0].ownerDocument).bind('click.chosen', this.click_test_action);
                        this.results_show();
                    } else if (!this.is_multiple && evt && (($(evt.target)[0] === this.selected_item[0]) || $(evt.target).parents("a.chosen-single").length)) {
                        evt.preventDefault();
                        this.results_toggle();
                    }
                    return this.activate_field();
                }
            }
        };

        Chosen.prototype.container_mouseup = function(evt) {
            if (evt.target.nodeName === "ABBR" && !this.is_disabled) {
                return this.results_reset(evt);
            }
        };

        Chosen.prototype.search_results_mousewheel = function(evt) {
            var delta;
            if (evt.originalEvent) {
                delta = evt.originalEvent.deltaY || -evt.originalEvent.wheelDelta || evt.originalEvent.detail;
            }
            if (delta != null) {
                evt.preventDefault();
                if (evt.type === 'DOMMouseScroll') {
                    delta = delta * 40;
                }
                return this.search_results.scrollTop(delta + this.search_results.scrollTop());
            }
        };

        Chosen.prototype.blur_test = function(evt) {
            if (!this.active_field && this.container.hasClass("chosen-container-active")) {
                return this.close_field();
            }
        };

        Chosen.prototype.close_field = function() {
            $(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action);
            this.active_field = false;
            this.results_hide();
            this.container.removeClass("chosen-container-active");
            this.clear_backstroke();
            this.show_search_field_default();
            return this.search_field_scale();
        };

        Chosen.prototype.activate_field = function() {
            this.container.addClass("chosen-container-active");
            this.active_field = true;
            this.search_field.val(this.search_field.val());
            return this.search_field.focus();
        };

        Chosen.prototype.test_active_click = function(evt) {
            var active_container;
            active_container = $(evt.target).closest('.chosen-container');
            if (active_container.length && this.container[0] === active_container[0]) {
                return this.active_field = true;
            } else {
                return this.close_field();
            }
        };

        Chosen.prototype.results_build = function() {
            this.parsing = true;
            this.selected_option_count = null;
            this.results_data = SelectParser.select_to_array(this.form_field);
            if (this.is_multiple) {
                this.search_choices.find("li.search-choice").remove();
            } else if (!this.is_multiple) {
                this.single_set_selected_text();
                if (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) {
                    this.search_field[0].readOnly = true;
                    this.container.addClass("chosen-container-single-nosearch");
                } else {
                    this.search_field[0].readOnly = false;
                    this.container.removeClass("chosen-container-single-nosearch");
                }
            }
            this.update_results_content(this.results_option_build({
                first: true
            }));
            this.search_field_disabled();
            this.show_search_field_default();
            this.search_field_scale();
            return this.parsing = false;
        };

        Chosen.prototype.result_do_highlight = function(el) {
            var high_bottom, high_top, maxHeight, visible_bottom, visible_top;
            if (el.length) {
                this.result_clear_highlight();
                this.result_highlight = el;
                this.result_highlight.addClass("highlighted");
                maxHeight = parseInt(this.search_results.css("maxHeight"), 10);
                visible_top = this.search_results.scrollTop();
                visible_bottom = maxHeight + visible_top;
                high_top = this.result_highlight.position().top + this.search_results.scrollTop();
                high_bottom = high_top + this.result_highlight.outerHeight();
                if (high_bottom >= visible_bottom) {
                    return this.search_results.scrollTop((high_bottom - maxHeight) > 0 ? high_bottom - maxHeight : 0);
                } else if (high_top < visible_top) {
                    return this.search_results.scrollTop(high_top);
                }
            }
        };

        Chosen.prototype.result_clear_highlight = function() {
            if (this.result_highlight) {
                this.result_highlight.removeClass("highlighted");
            }
            return this.result_highlight = null;
        };

        Chosen.prototype.results_show = function() {
            if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
                this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                });
                return false;
            }
            this.container.addClass("chosen-with-drop");
            this.results_showing = true;
            this.search_field.focus();
            this.search_field.val(this.search_field.val());
            this.winnow_results();
            return this.form_field_jq.trigger("chosen:showing_dropdown", {
                chosen: this
            });
        };

        Chosen.prototype.update_results_content = function(content) {
            return this.search_results.html(content);
        };

        Chosen.prototype.results_hide = function() {
            if (this.results_showing) {
                this.result_clear_highlight();
                this.container.removeClass("chosen-with-drop");
                this.form_field_jq.trigger("chosen:hiding_dropdown", {
                    chosen: this
                });
            }
            return this.results_showing = false;
        };

        Chosen.prototype.set_tab_index = function(el) {
            var ti;
            if (this.form_field.tabIndex) {
                ti = this.form_field.tabIndex;
                this.form_field.tabIndex = -1;
                return this.search_field[0].tabIndex = ti;
            }
        };

        Chosen.prototype.set_label_behavior = function() {
            var _this = this;
            this.form_field_label = this.form_field_jq.parents("label");
            if (!this.form_field_label.length && this.form_field.id.length) {
                this.form_field_label = $("label[for='" + this.form_field.id + "']");
            }
            if (this.form_field_label.length > 0) {
                return this.form_field_label.bind('click.chosen', function(evt) {
                    if (_this.is_multiple) {
                        return _this.container_mousedown(evt);
                    } else {
                        return _this.activate_field();
                    }
                });
            }
        };

        Chosen.prototype.show_search_field_default = function() {
            if (this.is_multiple && this.choices_count() < 1 && !this.active_field) {
                this.search_field.val(this.default_text);
                return this.search_field.addClass("default");
            } else {
                this.search_field.val("");
                return this.search_field.removeClass("default");
            }
        };

        Chosen.prototype.search_results_mouseup = function(evt) {
            var target;
            target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
            if (target.length) {
                this.result_highlight = target;
                this.result_select(evt);
                return this.search_field.focus();
            }
        };

        Chosen.prototype.search_results_mouseover = function(evt) {
            var target;
            target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
            if (target) {
                return this.result_do_highlight(target);
            }
        };

        Chosen.prototype.search_results_mouseout = function(evt) {
            if ($(evt.target).hasClass("active-result" || $(evt.target).parents('.active-result').first())) {
                return this.result_clear_highlight();
            }
        };

        Chosen.prototype.choice_build = function(item) {
            var choice, close_link,
                _this = this;
            choice = $('<li />', {
                "class": "search-choice"
            }).html("<span>" + (this.choice_label(item)) + "</span>");
            if (item.disabled) {
                choice.addClass('search-choice-disabled');
            } else {
                close_link = $('<a />', {
                    "class": 'search-choice-close',
                    'data-option-array-index': item.array_index
                });
                close_link.bind('click.chosen', function(evt) {
                    return _this.choice_destroy_link_click(evt);
                });
                choice.append(close_link);
            }
            return this.search_container.before(choice);
        };

        Chosen.prototype.choice_destroy_link_click = function(evt) {
            evt.preventDefault();
            evt.stopPropagation();
            if (!this.is_disabled) {
                return this.choice_destroy($(evt.target));
            }
        };

        Chosen.prototype.choice_destroy = function(link) {
            if (this.result_deselect(link[0].getAttribute("data-option-array-index"))) {
                this.show_search_field_default();
                if (this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1) {
                    this.results_hide();
                }
                link.parents('li').first().remove();
                return this.search_field_scale();
            }
        };

        Chosen.prototype.results_reset = function() {
            this.reset_single_select_options();
            this.form_field.options[0].selected = true;
            this.single_set_selected_text();
            this.show_search_field_default();
            this.results_reset_cleanup();
            this.form_field_jq.trigger("change");
            if (this.active_field) {
                return this.results_hide();
            }
        };

        Chosen.prototype.results_reset_cleanup = function() {
            this.current_selectedIndex = this.form_field.selectedIndex;
            return this.selected_item.find("abbr").remove();
        };

        Chosen.prototype.result_select = function(evt) {
            var high, item;
            if (this.result_highlight) {
                high = this.result_highlight;
                this.result_clear_highlight();
                if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
                    this.form_field_jq.trigger("chosen:maxselected", {
                        chosen: this
                    });
                    return false;
                }
                if (this.is_multiple) {
                    high.removeClass("active-result");
                } else {
                    this.reset_single_select_options();
                }
                high.addClass("result-selected");
                item = this.results_data[high[0].getAttribute("data-option-array-index")];
                item.selected = true;
                this.form_field.options[item.options_index].selected = true;
                this.selected_option_count = null;
                if (this.is_multiple) {
                    this.choice_build(item);
                } else {
                    this.single_set_selected_text(this.choice_label(item));
                }
                if (!((evt.metaKey || evt.ctrlKey) && this.is_multiple)) {
                    this.results_hide();
                }
                this.search_field.val("");
                if (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) {
                    this.form_field_jq.trigger("change", {
                        'selected': this.form_field.options[item.options_index].value
                    });
                }
                this.current_selectedIndex = this.form_field.selectedIndex;
                evt.preventDefault();
                return this.search_field_scale();
            }
        };

        Chosen.prototype.single_set_selected_text = function(text) {
            if (text == null) {
                text = this.default_text;
            }
            if (text === this.default_text) {
                this.selected_item.addClass("chosen-default");
            } else {
                this.single_deselect_control_build();
                this.selected_item.removeClass("chosen-default");
            }
            return this.selected_item.find("span").html(text);
        };

        Chosen.prototype.result_deselect = function(pos) {
            var result_data;
            result_data = this.results_data[pos];
            if (!this.form_field.options[result_data.options_index].disabled) {
                result_data.selected = false;
                this.form_field.options[result_data.options_index].selected = false;
                this.selected_option_count = null;
                this.result_clear_highlight();
                if (this.results_showing) {
                    this.winnow_results();
                }
                this.form_field_jq.trigger("change", {
                    deselected: this.form_field.options[result_data.options_index].value
                });
                this.search_field_scale();
                return true;
            } else {
                return false;
            }
        };

        Chosen.prototype.single_deselect_control_build = function() {
            if (!this.allow_single_deselect) {
                return;
            }
            if (!this.selected_item.find("abbr").length) {
                this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>");
            }
            return this.selected_item.addClass("chosen-single-with-deselect");
        };

        Chosen.prototype.get_search_text = function() {
            return $('<div/>').text($.trim(this.search_field.val())).html();
        };

        Chosen.prototype.winnow_results_set_highlight = function() {
            var do_high, selected_results;
            selected_results = !this.is_multiple ? this.search_results.find(".result-selected.active-result") : [];
            do_high = selected_results.length ? selected_results.first() : this.search_results.find(".active-result").first();
            if (do_high != null) {
                return this.result_do_highlight(do_high);
            }
        };

        Chosen.prototype.no_results = function(terms) {
            var no_results_html;
            no_results_html = $('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>');
            no_results_html.find("span").first().html(terms);
            this.search_results.append(no_results_html);
            return this.form_field_jq.trigger("chosen:no_results", {
                chosen: this
            });
        };

        Chosen.prototype.no_results_clear = function() {
            return this.search_results.find(".no-results").remove();
        };

        Chosen.prototype.keydown_arrow = function() {
            var next_sib;
            if (this.results_showing && this.result_highlight) {
                next_sib = this.result_highlight.nextAll("li.active-result").first();
                if (next_sib) {
                    return this.result_do_highlight(next_sib);
                }
            } else {
                return this.results_show();
            }
        };

        Chosen.prototype.keyup_arrow = function() {
            var prev_sibs;
            if (!this.results_showing && !this.is_multiple) {
                return this.results_show();
            } else if (this.result_highlight) {
                prev_sibs = this.result_highlight.prevAll("li.active-result");
                if (prev_sibs.length) {
                    return this.result_do_highlight(prev_sibs.first());
                } else {
                    if (this.choices_count() > 0) {
                        this.results_hide();
                    }
                    return this.result_clear_highlight();
                }
            }
        };

        Chosen.prototype.keydown_backstroke = function() {
            var next_available_destroy;
            if (this.pending_backstroke) {
                this.choice_destroy(this.pending_backstroke.find("a").first());
                return this.clear_backstroke();
            } else {
                next_available_destroy = this.search_container.siblings("li.search-choice").last();
                if (next_available_destroy.length && !next_available_destroy.hasClass("search-choice-disabled")) {
                    this.pending_backstroke = next_available_destroy;
                    if (this.single_backstroke_delete) {
                        return this.keydown_backstroke();
                    } else {
                        return this.pending_backstroke.addClass("search-choice-focus");
                    }
                }
            }
        };

        Chosen.prototype.clear_backstroke = function() {
            if (this.pending_backstroke) {
                this.pending_backstroke.removeClass("search-choice-focus");
            }
            return this.pending_backstroke = null;
        };

        Chosen.prototype.keydown_checker = function(evt) {
            var stroke, _ref1;
            stroke = (_ref1 = evt.which) != null ? _ref1 : evt.keyCode;
            this.search_field_scale();
            if (stroke !== 8 && this.pending_backstroke) {
                this.clear_backstroke();
            }
            switch (stroke) {
                case 8:
                    this.backstroke_length = this.search_field.val().length;
                    break;
                case 9:
                    if (this.results_showing && !this.is_multiple) {
                        this.result_select(evt);
                    }
                    this.mouse_on_container = false;
                    break;
                case 13:
                    if (this.results_showing) {
                        evt.preventDefault();
                    }
                    break;
                case 32:
                    if (this.disable_search) {
                        evt.preventDefault();
                    }
                    break;
                case 38:
                    evt.preventDefault();
                    this.keyup_arrow();
                    break;
                case 40:
                    evt.preventDefault();
                    this.keydown_arrow();
                    break;
            }
        };

        Chosen.prototype.search_field_scale = function() {
            var div, f_width, h, style, style_block, styles, w, _i, _len;
            if (this.is_multiple) {
                h = 0;
                w = 0;
                style_block = "position:absolute; left: -1000px; top: -1000px; display:none;";
                styles = ['font-size', 'font-style', 'font-weight', 'font-family', 'line-height', 'text-transform', 'letter-spacing'];
                for (_i = 0, _len = styles.length; _i < _len; _i++) {
                    style = styles[_i];
                    style_block += style + ":" + this.search_field.css(style) + ";";
                }
                div = $('<div />', {
                    'style': style_block
                });
                div.text(this.search_field.val());
                $('body').append(div);
                w = div.width() + 25;
                div.remove();
                f_width = this.container.outerWidth();
                if (w > f_width - 10) {
                    w = f_width - 10;
                }
                return this.search_field.css({
                    'width': w + 'px'
                });
            }
        };

        return Chosen;

    })(AbstractChosen);

}).call(this);
// source --> https://www.crestdatasys.com/wp-includes/js/jquery/ui/core.min.js?ver=1.11.4 
/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(a){var e,t,n,i;function r(e,t){var n,i,r,o=e.nodeName.toLowerCase();return"area"===o?(i=(n=e.parentNode).name,!(!e.href||!i||"map"!==n.nodeName.toLowerCase())&&(!!(r=a("img[usemap='#"+i+"']")[0])&&s(r))):(/^(input|select|textarea|button|object)$/.test(o)?!e.disabled:"a"===o&&e.href||t)&&s(e)}function s(e){return a.expr.filters.visible(e)&&!a(e).parents().addBack().filter(function(){return"hidden"===a.css(this,"visibility")}).length}a.ui=a.ui||{},a.extend(a.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),a.fn.extend({scrollParent:function(e){var t=this.css("position"),n="absolute"===t,i=e?/(auto|scroll|hidden)/:/(auto|scroll)/,r=this.parents().filter(function(){var e=a(this);return(!n||"static"!==e.css("position"))&&i.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==t&&r.length?r:a(this[0].ownerDocument||document)},uniqueId:(e=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&a(this).removeAttr("id")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(t){return function(e){return!!a.data(e,t)}}):function(e,t,n){return!!a.data(e,n[3])},focusable:function(e){return r(e,!isNaN(a.attr(e,"tabindex")))},tabbable:function(e){var t=a.attr(e,"tabindex"),n=isNaN(t);return(n||0<=t)&&r(e,!n)}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(e,n){var r="Width"===n?["Left","Right"]:["Top","Bottom"],i=n.toLowerCase(),o={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};function s(e,t,n,i){return a.each(r,function(){t-=parseFloat(a.css(e,"padding"+this))||0,n&&(t-=parseFloat(a.css(e,"border"+this+"Width"))||0),i&&(t-=parseFloat(a.css(e,"margin"+this))||0)}),t}a.fn["inner"+n]=function(e){return void 0===e?o["inner"+n].call(this):this.each(function(){a(this).css(i,s(this,e)+"px")})},a.fn["outer"+n]=function(e,t){return"number"!=typeof e?o["outer"+n].call(this,e):this.each(function(){a(this).css(i,s(this,e,!0,t)+"px")})}}),a.fn.addBack||(a.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=(t=a.fn.removeData,function(e){return arguments.length?t.call(this,a.camelCase(e)):t.call(this)})),a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),a.fn.extend({focus:(i=a.fn.focus,function(t,n){return"number"==typeof t?this.each(function(){var e=this;setTimeout(function(){a(e).focus(),n&&n.call(e)},t)}):i.apply(this,arguments)}),disableSelection:(n="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.bind(n+".ui-disableSelection",function(e){e.preventDefault()})}),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(e){if(void 0!==e)return this.css("zIndex",e);if(this.length)for(var t,n,i=a(this[0]);i.length&&i[0]!==document;){if(("absolute"===(t=i.css("position"))||"relative"===t||"fixed"===t)&&(n=parseInt(i.css("zIndex"),10),!isNaN(n)&&0!==n))return n;i=i.parent()}return 0}}),a.ui.plugin={add:function(e,t,n){var i,r=a.ui[e].prototype;for(i in n)r.plugins[i]=r.plugins[i]||[],r.plugins[i].push([t,n[i]])},call:function(e,t,n,i){var r,o=e.plugins[t];if(o&&(i||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(r=0;r<o.length;r++)e.options[o[r][0]]&&o[r][1].apply(e.element,n)}}});
// source --> https://www.crestdatasys.com/wp-content/plugins/mega-addons-for-visual-composer/js/script.js?ver=5.3.6 
jQuery(document).ready(function($) {

	if(jQuery('.equal-height .mason-item').length > 0){
		jQuery('.equal-height .mason-item').matchHeight({byRow: true}); 
	}
	$('a, i').hover(function() {
		$(this).css({
			'color': $(this).data('onhovercolor'),
			'background-color': $(this).data('onhoverbg')
		});
	}, function() {
		$(this).css({
			'color': $(this).data('onleavecolor'),
			'background-color': $(this).data('onleavebg')
		});		
	});
});

// Photo Book Gallery

function PhotoBookGallery(el){
	jQuery('.wcp-loader').show();
	if (initiated) { jQuery(el).booklet('destroy'); };

	jQuery(el).css('width', '100%');	
	jQuery(el).find('img').css('width', '100%');

	var width = jQuery(el).find('img').width();
	var height = jQuery(el).find('img').height()/2;

	var speedofturn 		= (jQuery(el).data('speed') != '') ? jQuery(el).data('speed') : '1000';
	var readingdirection 	= jQuery(el).data('direction');
	var pagepadding 		= jQuery(el).data('padding');
	var delay 				= jQuery(el).data('autodelay');
	var pagenumbers 		= (jQuery(el).data('pagenumbers') != '') ? true : false;
	var closedbook 			= (jQuery(el).data('closedbook') != '') ? true : false;
	var autoplay 			= (jQuery(el).data('autoplay') != '') ? true : false;
	var keyboardcontrols 	= (jQuery(el).data('keyboard') != '') ? true : false;
	var booktabs 			= (jQuery(el).data('tabs') != '') ? true : false;
	var bookarrows 			= (jQuery(el).data('arrows') != '') ? true : false;
	var manual 				= (jQuery(el).data('turnbyclick') != '') ? true : false;
	var manualcontrol 		= false;

	if (jQuery(el).data('turnbyclick') != '') { manualcontrol = true; manual = false; }

	jQuery(el).booklet({
        width:  width,
        height: height,
		auto: autoplay,
		arrows: bookarrows,
		tabs: booktabs,
        closed: closedbook,
        autoCenter: closedbook,
        delay: delay,
        keyboard: keyboardcontrols,
        overlays: manualcontrol,
        manual: manual,
        pageNumbers: pagenumbers,
		pagePadding: pagepadding,
		direction: readingdirection,
		speed: speedofturn,
	});

	if (jQuery(el).data('zoom') != '') {
	    setTimeout(function() {
			jQuery(el).find('img').each(function(index, el) {
				jQuery(this).closest('div').zoom({magnify: jQuery(el).data('zoomdepth')});
			});
	    }, 100);
    };

	jQuery('.wcp-loader').hide();
	initiated = true;
}
var initiated = false;
jQuery( window ).on("resize", function() {
	jQuery('.flipbook').each(function(index, el) {
		PhotoBookGallery(el);
	});
});

jQuery(window).load(function($) {
	jQuery(window).trigger('resize');
});

// CountDown timer
jQuery(document).ready(function($) {
	$(function () {
		$('.countdownapply').each(function(index, el) {
			var style = $(this).data('style');
			var year = $(this).data('year');
			var month = $(this).data('month');
			var date = $(this).data('date');
			var CountDown = new Date();
			CountDown = new Date(CountDown.getFullYear() + year, month - 1, date);
			$(this).countdown({until: CountDown, format: style});
		});
	});
});
// source --> https://www.crestdatasys.com/wp-content/plugins/smart-logo-showcase-lite/js/owl.carousel.js?ver=1.1.2 
/**
 * Owl carousel
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	var drag, state, e;

	/**
	 * Template for status information about drag and touch events.
	 * @private
	 */
	drag = {
		start: 0,
		startX: 0,
		startY: 0,
		current: 0,
		currentX: 0,
		currentY: 0,
		offsetX: 0,
		offsetY: 0,
		distance: null,
		startTime: 0,
		endTime: 0,
		updatedX: 0,
		targetEl: null
	};

	/**
	 * Template for some status informations.
	 * @private
	 */
	state = {
		isTouch: false,
		isScrolling: false,
		isSwiping: false,
		direction: false,
		inMotion: false
	};

	/**
	 * Event functions references.
	 * @private
	 */
	e = {
		_onDragStart: null,
		_onDragMove: null,
		_onDragEnd: null,
		_transitionEnd: null,
		_resizer: null,
		_responsiveCall: null,
		_goToLoop: null,
		_checkVisibile: null
	};

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Caches informations about drag and touch events.
		 */
		this.drag = $.extend({}, drag);

		/**
		 * Caches some status informations.
		 * @protected
		 */
		this.state = $.extend({}, state);

		/**
		 * @protected
		 * @todo Must be documented
		 */
		this.e = $.extend({}, e);

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from beeing retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key[0].toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Pipe, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,
		responsiveClass: false,

		fallbackEasing: 'swing',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		// Classes and Names
		themeClass: 'owl-theme',
		baseClass: 'owl-carousel',
		itemClass: 'owl-item',
		centerClass: 'center',
		activeClass: 'active'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * Update pipe.
	 */
	Owl.Pipe = [ {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var cached = this._clones,
				clones = this.$stage.children('.cloned');

			if (clones.length !== cached.length || (!this.settings.loop && cached.length > 0)) {
				this.$stage.children('.cloned').remove();
				this._clones = [];
			}
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var i, n,
				clones = this._clones,
				items = this._items,
				delta = this.settings.loop ? clones.length - Math.max(this.settings.items * 2, 4) : 0;

			for (i = 0, n = Math.abs(delta / 2); i < n; i++) {
				if (delta > 0) {
					this.$stage.children().eq(items.length + clones.length - 1).remove();
					clones.pop();
					this.$stage.children().eq(0).remove();
					clones.pop();
				} else {
					clones.push(clones.length / 2);
					this.$stage.append(items[clones[clones.length - 1]].clone().addClass('cloned'));
					clones.push(items.length - 1 - (clones.length - 1) / 2);
					this.$stage.prepend(items[clones[clones.length - 1]].clone().addClass('cloned'));
				}
			}
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = (this.settings.rtl ? 1 : -1),
				width = (this.width() / this.settings.items).toFixed(3),
				coordinate = 0, merge, i, n;

			this._coordinates = [];
			for (i = 0, n = this._clones.length + this._items.length; i < n; i++) {
				merge = this._mergers[this.relative(i)];
				merge = (this.settings.mergeFit && Math.min(merge, this.settings.items)) || merge;
				coordinate += (this.settings.autoWidth ? this._items[this.relative(i)].width() + this.settings.margin : width * merge) * rtl;

				this._coordinates.push(coordinate);
			}
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var i, n, width = (this.width() / this.settings.items).toFixed(3), css = {
				'width': Math.abs(this._coordinates[this._coordinates.length - 1]) + this.settings.stagePadding * 2,
				'padding-left': this.settings.stagePadding || '',
				'padding-right': this.settings.stagePadding || ''
			};

			this.$stage.css(css);

			css = { 'width': this.settings.autoWidth ? 'auto' : width - this.settings.margin };
			css[this.settings.rtl ? 'margin-left' : 'margin-right'] = this.settings.margin;

			if (!this.settings.autoWidth && $.grep(this._mergers, function(v) { return v > 1 }).length > 0) {
				for (i = 0, n = this._coordinates.length; i < n; i++) {
					css.width = Math.abs(this._coordinates[i]) - Math.abs(this._coordinates[i - 1] || 0) - this.settings.margin;
					this.$stage.children().eq(i).css(css);
				}
			} else {
				this.$stage.children().css(css);
			}
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current && this.reset(this.$stage.children().index(cache.current));
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.' + this.settings.activeClass).removeClass(this.settings.activeClass);
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass(this.settings.activeClass);

			if (this.settings.center) {
				this.$stage.children('.' + this.settings.centerClass).removeClass(this.settings.centerClass);
				this.$stage.children().eq(this.current()).addClass(this.settings.centerClass);
			}
		}
	} ];

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.trigger('initialize');

		this.$element
			.addClass(this.settings.baseClass)
			.addClass(this.settings.themeClass)
			.toggleClass('owl-rtl', this.settings.rtl);

		// check support
		this.browserSupport();

		if (this.settings.autoWidth && this.state.imagesLoaded !== true) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
				return false;
			}
		}

		this.$element.addClass('owl-loading');

		// create stage
		this.$stage = $('<' + this.settings.stageElement + ' class="owl-stage"/>')
			.wrap('<div class="owl-stage-outer">');

		// append stage
		this.$element.append(this.$stage.parent());

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// set view width
		this._width = this.$element.width();

		// update view
		this.refresh();

		this.$element.removeClass('owl-loading').addClass('owl-loaded');

		// attach generic events
		this.eventsCall();

		// attach generic events
		this.internalEvents();

		// attach custom control events
		this.addTriggerableEvents();

		this.trigger('initialized');
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class', function(i, c) {
					return c.replace(/\b owl-responsive-\S+/g, '');
				}).addClass('owl-responsive-' + match);
			}
		}

		if (this.settings === null || this._breakpoint !== match) {
			this.trigger('change', { property: { name: 'settings', value: settings } });
			this._breakpoint = match;
			this.settings = settings;
			this.invalidate('settings');
			this.trigger('changed', { property: { name: 'settings', value: this.settings } });
		}
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		// Toggle Center class
		this.$element.toggleClass('owl-center', this.settings.center);

		// if items number is less than in body
		if (this.settings.loop && this._items.length < this.settings.items) {
			this.settings.loop = false;
		}

		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.settings.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		if (this._items.length === 0) {
			return false;
		}

		var start = new Date().getTime();

		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		// hide and show methods helps here to set a proper widths,
		// this prevents scrollbar to be calculated in stage width
		this.$stage.addClass('owl-refresh');

		this.update();

		this.$stage.removeClass('owl-refresh');

		this.state.orientation = window.orientation;

		this.watchVisibility();

		this.trigger('refreshed');
	};

	/**
	 * Save internal event references and add event based functions.
	 * @protected
	 */
	Owl.prototype.eventsCall = function() {
		// Save events references
		this.e._onDragStart = $.proxy(function(e) {
			this.onDragStart(e);
		}, this);
		this.e._onDragMove = $.proxy(function(e) {
			this.onDragMove(e);
		}, this);
		this.e._onDragEnd = $.proxy(function(e) {
			this.onDragEnd(e);
		}, this);
		this.e._onResize = $.proxy(function(e) {
			this.onResize(e);
		}, this);
		this.e._transitionEnd = $.proxy(function(e) {
			this.transitionEnd(e);
		}, this);
		this.e._preventClick = $.proxy(function(e) {
			this.preventClick(e);
		}, this);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (this.trigger('resize').isDefaultPrevented()) {
			return false;
		}

		this._width = this.$element.width();

		this.invalidate('width');

		this.refresh();

		this.trigger('resized');
	};

	/**
	 * Checks for touch/mouse drag event type and add run event handlers.
	 * @protected
	 */
	Owl.prototype.eventsRouter = function(event) {
		var type = event.type;

		if (type === "mousedown" || type === "touchstart") {
			this.onDragStart(event);
		} else if (type === "mousemove" || type === "touchmove") {
			this.onDragMove(event);
		} else if (type === "mouseup" || type === "touchend") {
			this.onDragEnd(event);
		} else if (type === "touchcancel") {
			this.onDragEnd(event);
		}
	};

	/**
	 * Checks for touch/mouse drag options and add necessery event handlers.
	 * @protected
	 */
	Owl.prototype.internalEvents = function() {
		var isTouch = isTouchSupport(),
			isTouchIE = isTouchSupportIE();

		if (this.settings.mouseDrag){
			this.$stage.on('mousedown', $.proxy(function(event) { this.eventsRouter(event) }, this));
			this.$stage.on('dragstart', function() { return false });
			this.$stage.get(0).onselectstart = function() { return false };
		} else {
			this.$element.addClass('owl-text-select-on');
		}

		if (this.settings.touchDrag && !isTouchIE){
			this.$stage.on('touchstart touchcancel', $.proxy(function(event) { this.eventsRouter(event) }, this));
		}

		// catch transitionEnd event
		if (this.transitionEndVendor) {
			this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, false);
		}

		// responsive
		if (this.settings.responsive !== false) {
			this.on(window, 'resize', $.proxy(this.onThrottledResize, this));
		}
	};

	/**
	 * Handles touchstart/mousedown event.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var ev, isTouchEvent, pageX, pageY, animatedPos;

		ev = event.originalEvent || event || window.event;

		// prevent right click
		if (ev.which === 3 || this.state.isTouch) {
			return false;
		}

		if (ev.type === 'mousedown') {
			this.$stage.addClass('owl-grab');
		}

		this.trigger('drag');
		this.drag.startTime = new Date().getTime();
		this.speed(0);
		this.state.isTouch = true;
		this.state.isScrolling = false;
		this.state.isSwiping = false;
		this.drag.distance = 0;

		pageX = getTouches(ev).x;
		pageY = getTouches(ev).y;

		// get stage position left
		this.drag.offsetX = this.$stage.position().left;
		this.drag.offsetY = this.$stage.position().top;

		if (this.settings.rtl) {
			this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width()
				+ this.settings.margin;
		}

		// catch position // ie to fix
		if (this.state.inMotion && this.support3d) {
			animatedPos = this.getTransformProperty();
			this.drag.offsetX = animatedPos;
			this.animate(animatedPos);
			this.state.inMotion = true;
		} else if (this.state.inMotion && !this.support3d) {
			this.state.inMotion = false;
			return false;
		}

		this.drag.startX = pageX - this.drag.offsetX;
		this.drag.startY = pageY - this.drag.offsetY;

		this.drag.start = pageX - this.drag.startX;
		this.drag.targetEl = ev.target || ev.srcElement;
		this.drag.updatedX = this.drag.start;

		// to do/check
		// prevent links and images dragging;
		if (this.drag.targetEl.tagName === "IMG" || this.drag.targetEl.tagName === "A") {
			this.drag.targetEl.draggable = false;
		}

		$(document).on('mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents', $.proxy(function(event) {this.eventsRouter(event)},this));
	};

	/**
	 * Handles the touchmove/mousemove events.
	 * @todo Simplify
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var ev, isTouchEvent, pageX, pageY, minValue, maxValue, pull;

		if (!this.state.isTouch) {
			return;
		}

		if (this.state.isScrolling) {
			return;
		}

		ev = event.originalEvent || event || window.event;

		pageX = getTouches(ev).x;
		pageY = getTouches(ev).y;

		// Drag Direction
		this.drag.currentX = pageX - this.drag.startX;
		this.drag.currentY = pageY - this.drag.startY;
		this.drag.distance = this.drag.currentX - this.drag.offsetX;

		// Check move direction
		if (this.drag.distance < 0) {
			this.state.direction = this.settings.rtl ? 'right' : 'left';
		} else if (this.drag.distance > 0) {
			this.state.direction = this.settings.rtl ? 'left' : 'right';
		}
		// Loop
		if (this.settings.loop) {
			if (this.op(this.drag.currentX, '>', this.coordinates(this.minimum())) && this.state.direction === 'right') {
				this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
			} else if (this.op(this.drag.currentX, '<', this.coordinates(this.maximum())) && this.state.direction === 'left') {
				this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
			}
		} else {
			// pull
			minValue = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maxValue = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? this.drag.distance / 5 : 0;
			this.drag.currentX = Math.max(Math.min(this.drag.currentX, minValue + pull), maxValue + pull);
		}

		// Lock browser if swiping horizontal

		if ((this.drag.distance > 8 || this.drag.distance < -8)) {
			if (ev.preventDefault !== undefined) {
				ev.preventDefault();
			} else {
				ev.returnValue = false;
			}
			this.state.isSwiping = true;
		}

		this.drag.updatedX = this.drag.currentX;

		// Lock Owl if scrolling
		if ((this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === false) {
			this.state.isScrolling = true;
			this.drag.updatedX = this.drag.start;
		}

		this.animate(this.drag.updatedX);
	};

	/**
	 * Handles the touchend/mouseup events.
	 * @protected
	 */
	Owl.prototype.onDragEnd = function(event) {
		var compareTimes, distanceAbs, closest;

		if (!this.state.isTouch) {
			return;
		}

		if (event.type === 'mouseup') {
			this.$stage.removeClass('owl-grab');
		}

		this.trigger('dragged');

		// prevent links and images dragging;
		this.drag.targetEl.removeAttribute("draggable");

		// remove drag event listeners

		this.state.isTouch = false;
		this.state.isScrolling = false;
		this.state.isSwiping = false;

		// to check
		if (this.drag.distance === 0 && this.state.inMotion !== true) {
			this.state.inMotion = false;
			return false;
		}

		// prevent clicks while scrolling

		this.drag.endTime = new Date().getTime();
		compareTimes = this.drag.endTime - this.drag.startTime;
		distanceAbs = Math.abs(this.drag.distance);

		// to test
		if (distanceAbs > 3 || compareTimes > 300) {
			this.removeClick(this.drag.targetEl);
		}

		closest = this.closest(this.drag.updatedX);

		this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
		this.current(closest);
		this.invalidate('position');
		this.update();

		// if pullDrag is off then fire transitionEnd event manually when stick
		// to border
		if (!this.settings.pullDrag && this.drag.updatedX === this.coordinates(closest)) {
			this.transitionEnd();
		}

		this.drag.distance = 0;

		$(document).off('.owl.dragEvents');
	};

	/**
	 * Attaches `preventClick` to disable link while swipping.
	 * @protected
	 * @param {HTMLElement} [target] - The target of the `click` event.
	 */
	Owl.prototype.removeClick = function(target) {
		this.drag.targetEl = target;
		$(target).on('click.preventClick', this.e._preventClick);
		// to make sure click is removed:
		window.setTimeout(function() {
			$(target).off('click.preventClick');
		}, 300);
	};

	/**
	 * Suppresses click event.
	 * @protected
	 * @param {Event} ev - The event arguments.
	 */
	Owl.prototype.preventClick = function(ev) {
		if (ev.preventDefault) {
			ev.preventDefault();
		} else {
			ev.returnValue = false;
		}
		if (ev.stopPropagation) {
			ev.stopPropagation();
		}
		$(ev.target).off('click.preventClick');
	};

	/**
	 * Catches stage position while animate (only CSS3).
	 * @protected
	 * @returns
	 */
	Owl.prototype.getTransformProperty = function() {
		var transform, matrix3d;

		transform = window.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + 'transform');
		// var transform = this.$stage.css(this.vendorName + 'transform')
		transform = transform.replace(/matrix(3d)?\(|\)/g, '').split(',');
		matrix3d = transform.length === 16;

		return matrix3d !== true ? transform[4] : transform[12];
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate) {
		var position = -1, pull = 30, width = this.width(), coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				if (coordinate > value - pull && coordinate < value + pull) {
					position = index;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
					position = this.state.direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		this.trigger('translate');
		this.state.inMotion = this.speed() > 0;

		if (this.support3d) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px' + ',0px, 0px)',
				transition: (this.speed() / 1000) + 's'
			});
		} else if (this.state.isTouch) {
			this.$stage.css({
				left: coordinate + 'px'
			});
		} else {
			this.$stage.animate({
				left: coordinate
			}, this.speed() / 1000, this.settings.fallbackEasing, $.proxy(function() {
				if (this.state.inMotion) {
					this.transitionEnd();
				}
			}, this));
		}
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} part - The part to invalidate.
	 */
	Owl.prototype.invalidate = function(part) {
		this._invalidated[part] = true;
	}

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position for an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = (relative ? this._items.length : this._items.length + this._clones.length);

		if (!$.isNumeric(position) || n < 1) {
			return undefined;
		}

		if (this._clones.length) {
			position = ((position % n) + n) % n;
		} else {
			position = Math.max(this.minimum(relative), Math.min(this.maximum(relative), position));
		}

		return position;
	};

	/**
	 * Converts an absolute position for an item into a relative position.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position = this.normalize(position);
		position = position - this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for an item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var maximum, width, i = 0, coordinate,
			settings = this.settings;

		if (relative) {
			return this._items.length - 1;
		}

		if (!settings.loop && settings.center) {
			maximum = this._items.length - 1;
		} else if (!settings.loop && !settings.center) {
			maximum = this._items.length - settings.items;
		} else if (settings.loop || settings.center) {
			maximum = this._items.length + settings.items;
		} else if (settings.autoWidth || settings.merge) {
			revert = settings.rtl ? 1 : -1;
			width = this.$stage.width() - this.$element.width();
			while (coordinate = this.coordinates(i)) {
				if (coordinate * revert >= width) {
					break;
				}
				maximum = ++i;
			}
		} else {
			throw 'Can not detect maximum absolute position.'
		}

		return maximum;
	};

	/**
	 * Gets the minimum position for an item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		if (relative) {
			return 0;
		}

		return this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var coordinate = null;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[position - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1);
		} else {
			coordinate = this._coordinates[position - 1] || 0;
		}

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		if (this.settings.loop) {
			var distance = position - this.relative(this.current()),
				revert = this.current(),
				before = this.current(),
				after = this.current() + distance,
				direction = before - after < 0 ? true : false,
				items = this._clones.length + this._items.length;

			if (after < this.settings.items && direction === false) {
				revert = before + this._items.length;
				this.reset(revert);
			} else if (after >= items - this.settings.items && direction === true) {
				revert = before - this._items.length;
				this.reset(revert);
			}
			window.clearTimeout(this.e._goToLoop);
			this.e._goToLoop = window.setTimeout($.proxy(function() {
				this.speed(this.duration(this.current(), revert + distance, speed));
				this.current(revert + distance);
				this.update();
			}, this), 30);
		} else {
			this.speed(this.duration(this.current(), position, speed));
			this.current(position);
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.transitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.state.inMotion = false;
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			throw 'Can not detect viewport width.';
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset($.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		position = position === undefined ? this._items.length : this.normalize(position, true);

		this.trigger('add', { content: content, position: position });

		if (this._items.length === 0 || position === this._items.length) {
			this.$stage.append(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Adds triggerable events.
	 * @protected
	 */
	Owl.prototype.addTriggerableEvents = function() {
		var handler = $.proxy(function(callback, event) {
			return $.proxy(function(e) {
				if (e.relatedTarget !== this) {
					this.suppress([ event ]);
					callback.apply(this, [].slice.call(arguments, 1));
					this.release([ event ]);
				}
			}, this);
		}, this);

		$.each({
			'next': this.next,
			'prev': this.prev,
			'to': this.to,
			'destroy': this.destroy,
			'refresh': this.refresh,
			'replace': this.replace,
			'add': this.add,
			'remove': this.remove
		}, $.proxy(function(event, callback) {
			this.$element.on(event + '.owl.carousel', handler(callback, event + '.owl.carousel'));
		}, this));

	};

	/**
	 * Watches the visibility of the carousel element.
	 * @protected
	 */
	Owl.prototype.watchVisibility = function() {

		// test on zepto
		if (!isElVisible(this.$element.get(0))) {
			this.$element.addClass('owl-hidden');
			window.clearInterval(this.e._checkVisibile);
			this.e._checkVisibile = window.setInterval($.proxy(checkVisible, this), 500);
		}

		function isElVisible(el) {
			return el.offsetWidth > 0 && el.offsetHeight > 0;
		}

		function checkVisible() {
			if (isElVisible(this.$element.get(0))) {
				this.$element.removeClass('owl-hidden');
				this.refresh();
				window.clearInterval(this.e._checkVisibile);
			}
		}
	};

	/**
	 * Preloads images with auto width.
	 * @protected
	 * @todo Still to test
	 */
	Owl.prototype.preloadAutoWidthImages = function(imgs) {
		var loaded, that, $el, img;

		loaded = 0;
		that = this;
		imgs.each(function(i, el) {
			$el = $(el);
			img = new Image();

			img.onload = function() {
				loaded++;
				$el.attr('src', img.src);
				$el.css('opacity', 1);
				if (loaded >= imgs.length) {
					that.state.imagesLoaded = true;
					that.initialize();
				}
			};

			img.src = $el.attr('src') || $el.attr('data-src') || $el.attr('data-src-retina');
		});
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		if (this.$element.hasClass(this.settings.themeClass)) {
			this.$element.removeClass(this.settings.themeClass);
		}

		if (this.settings.responsive !== false) {
			$(window).off('resize.owl.carousel');
		}

		if (this.transitionEndVendor) {
			this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
		}

		for ( var i in this._plugins) {
			this._plugins[i].destroy();
		}

		if (this.settings.mouseDrag || this.settings.touchDrag) {
			this.$stage.off('mousedown touchstart touchcancel');
			$(document).off('.owl.dragEvents');
			this.$stage.get(0).onselectstart = function() {};
			this.$stage.off('dragstart', function() { return false });
		}

		// remove event handlers in the ".owl.carousel" namespace
		this.$element.off('.owl');

		this.$stage.children('.cloned').remove();
		this.e = null;
		this.$element.removeData('owlCarousel');

		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();
		this.$stage.unwrap();
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers an public event.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=.owl.carousel] - The event namespace.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].apply(this, event);
			}
		}

		return event;
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	}

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	}

	/**
	 * Checks the availability of some browser features.
	 * @protected
	 */
	Owl.prototype.browserSupport = function() {
		this.support3d = isPerspective();

		if (this.support3d) {
			this.transformVendor = isTransform();

			// take transitionend event name by detecting transition
			var endVendors = [ 'transitionend', 'webkitTransitionEnd', 'transitionend', 'oTransitionEnd' ];
			this.transitionEndVendor = endVendors[isTransition()];

			// take vendor name from transform name
			this.vendorName = this.transformVendor.replace(/Transform/i, '');
			this.vendorName = this.vendorName !== '' ? '-' + this.vendorName.toLowerCase() + '-' : '';
		}

		this.state.orientation = window.orientation;
	};

	/**
	 * Get touch/drag coordinats.
	 * @private
	 * @param {event} - mousedown/touchstart event
	 * @returns {object} - Contains X and Y of current mouse/touch position
	 */

	function getTouches(event) {
		if (event.touches !== undefined) {
			return {
				x: event.touches[0].pageX,
				y: event.touches[0].pageY
			};
		}

		if (event.touches === undefined) {
			if (event.pageX !== undefined) {
				return {
					x: event.pageX,
					y: event.pageY
				};
			}

		if (event.pageX === undefined) {
			return {
					x: event.clientX,
					y: event.clientY
				};
			}
		}
	}

	/**
	 * Checks for CSS support.
	 * @private
	 * @param {Array} array - The CSS properties to check for.
	 * @returns {Array} - Contains the supported CSS property name and its index or `false`.
	 */
	function isStyleSupported(array) {
		var p, s, fake = document.createElement('div'), list = array;
		for (p in list) {
			s = list[p];
			if (typeof fake.style[s] !== 'undefined') {
				fake = null;
				return [ s, p ];
			}
		}
		return [ false ];
	}

	/**
	 * Checks for CSS transition support.
	 * @private
	 * @todo Realy bad design
	 * @returns {Number}
	 */
	function isTransition() {
		return isStyleSupported([ 'transition', 'WebkitTransition', 'MozTransition', 'OTransition' ])[1];
	}

	/**
	 * Checks for CSS transform support.
	 * @private
	 * @returns {String} The supported property name or false.
	 */
	function isTransform() {
		return isStyleSupported([ 'transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform' ])[0];
	}

	/**
	 * Checks for CSS perspective support.
	 * @private
	 * @returns {String} The supported property name or false.
	 */
	function isPerspective() {
		return isStyleSupported([ 'perspective', 'webkitPerspective', 'MozPerspective', 'OPerspective', 'MsPerspective' ])[0];
	}

	/**
	 * Checks wether touch is supported or not.
	 * @private
	 * @returns {Boolean}
	 */
	function isTouchSupport() {
		return 'ontouchstart' in window || !!(navigator.msMaxTouchPoints);
	}

	/**
	 * Checks wether touch is supported or not for IE.
	 * @private
	 * @returns {Boolean}
	 */
	function isTouchSupportIE() {
		return window.navigator.msPointerEnabled;
	}

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @public
	 */
	$.fn.owlCarousel = function(options) {
		return this.each(function() {
			if (!$(this).data('owlCarousel')) {
				$(this).data('owlCarousel', new Owl(this, options));
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = ((e.property && e.property.value) || this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position++)), load);
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	}

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false
	}

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
				url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url(' + url + ')',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	}

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	}

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function() {
				if (this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.autoHeight && e.property.name == 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (this._core.settings.autoHeight && e.element.closest('.' + this._core.settings.itemClass)
					=== this._core.$stage.children().eq(this._core.current())) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		this._core.$stage.parent()
			.height(this._core.$stage.children().eq(this._core.current()).height())
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * Whether this is in fullscreen or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._fullscreen = false;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'resize.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.video && !this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refresh.owl.carousel changed.owl.carousel': $.proxy(function(e) {
				if (this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				var $element = $(e.content).find('.owl-video');
				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {

		var type = target.attr('data-vimeo-id') ? 'vimeo' : 'youtube',
			id = target.attr('data-vimeo-id') || target.attr('data-youtube-id'),
			width = target.attr('data-width') || this._core.settings.videoWidth,
			height = target.attr('data-height') || this._core.settings.videoHeight,
			url = target.attr('href');

		if (url) {
			id = url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {

		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
				} else {
					tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "http://img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: 'http://vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} ev - The event arguments.
	 */
	Video.prototype.play = function(ev) {
		this._core.trigger('play', null, 'video');

		if (this._playing) {
			this.stop();
		}

		var target = $(ev.target || ev.srcElement),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html, wrap;

		if (video.type === 'youtube') {
			html = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/'
				+ video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
		} else if (video.type === 'vimeo') {
			html = '<iframe src="http://player.vimeo.com/video/' + video.id + '?autoplay=1" width="' + width
				+ '" height="' + height
				+ '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		}

		item.addClass('owl-video-playing');
		this._playing = item;

		wrap = $('<div style="height:' + height + 'px; width:' + width + 'px" class="owl-video-frame">'
			+ html + '</div>');
		target.after(wrap);
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {

		// if Vimeo Fullscreen mode
		var element = document.fullscreenElement || document.mozFullScreenElement
			|| document.webkitFullscreenElement;

		if (element && $(element).parent().hasClass('owl-video-frame')) {
			this._core.speed(0);
			this._fullscreen = true;
		}

		if (element && this._fullscreen && this._playing) {
			return false;
		}

		// comming back from fullscreen
		if (this._fullscreen) {
			this._fullscreen = false;
			return false;
		}

		// check full screen mode and window orientation
		if (this._playing) {
			if (this._core.state.orientation !== window.orientation) {
				this._core.state.orientation = window.orientation;
				return false;
			}
		}

		return true;
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				this.swapping = e.type == 'translated';
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1 || !this.core.support3d) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing)
				.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
		}

		if (incoming) {
			next.addClass('animated owl-animated-in')
				.addClass(incoming)
				.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.transitionEnd();
	}

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Autoplay.Defaults, this.core.options);

		this.handlers = {
			'translated.owl.carousel refreshed.owl.carousel': $.proxy(function() {
				this.autoplay();
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				this.play(t, s);
			}, this),
			'stop.owl.autoplay': $.proxy(function() {
				this.stop();
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this.core.settings.autoplayHoverPause) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this.core.settings.autoplayHoverPause) {
					this.autoplay();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * @protected
	 * @todo Must be documented.
	 */
	Autoplay.prototype.autoplay = function() {
		if (this.core.settings.autoplay && !this.core.state.videoPlay) {
			window.clearInterval(this.interval);

			this.interval = window.setInterval($.proxy(function() {
				this.play();
			}, this), this.core.settings.autoplayTimeout);
		} else {
			window.clearInterval(this.interval);
		}
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - ...
	 * @param {Number} [speed] - ...
	 * @returns {Boolean|undefined} - ...
	 * @todo Must be documented.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		// if tab is inactive - doesnt work in <IE10
		if (document.hidden === true) {
			return;
		}

		if (this.core.state.isTouch || this.core.state.isScrolling
			|| this.core.state.isSwiping || this.core.state.inMotion) {
			return;
		}

		if (this.core.settings.autoplay === false) {
			window.clearInterval(this.interval);
			return;
		}

		this.core.next(this.core.settings.autoplaySpeed);
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		window.clearInterval(this.interval);
	};

	/**
	 * Pauses the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		window.clearInterval(this.interval);
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this.interval);

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.0.0
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.dotsData) {
					this._templates.push($(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
				}
			}, this),
			'add.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, $(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
				}
			}, this),
			'remove.owl.carousel prepared.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'change.owl.carousel': $.proxy(function(e) {
				if (e.property.name == 'position') {
					if (!this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
						var current = this._core.current(),
							maximum = this._core.maximum(),
							minimum = this._core.minimum();
						e.data = e.property.value > maximum
							? current >= maximum ? minimum : maximum
							: e.property.value < minimum ? maximum : e.property.value;
					}
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function() {
				if (!this._initialized) {
					this.initialize();
					this._initialized = true;
				}
				this._core.trigger('refresh', null, 'navigation');
				this.update();
				this.draw();
				this._core.trigger('refreshed', null, 'navigation');
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	}

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navRewind: true,
		navText: [ 'prev', 'next' ],
		navSpeed: false,
		navElement: 'div',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [ 'owl-prev', 'owl-next' ],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotData: false,
		dotsSpeed: false,
		dotsContainer: false,
		controlsClass: 'owl-controls'
	}

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var $container, override,
			options = this._core.settings;

		// create the indicator template
		if (!options.dotsData) {
			this._templates = [ $('<div>')
				.addClass(options.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		// create controls container if needed
		if (!options.navContainer || !options.dotsContainer) {
			this._controls.$container = $('<div>')
				.addClass(options.controlsClass)
				.appendTo(this.$element);
		}

		// create DOM structure for absolute navigation
		this._controls.$indicators = options.dotsContainer ? $(options.dotsContainer)
			: $('<div>').hide().addClass(options.dotsClass).appendTo(this._controls.$container);

		this._controls.$indicators.on('click', 'div', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$indicators)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, options.dotsSpeed);
		}, this));

		// create DOM structure for relative navigation
		$container = options.navContainer ? $(options.navContainer)
			: $('<div>').addClass(options.navContainerClass).prependTo(this._controls.$container);

		this._controls.$next = $('<' + options.navElement + '>');
		this._controls.$previous = this._controls.$next.clone();

		this._controls.$previous
			.addClass(options.navClass[0])
			.html(options.navText[0])
			.hide()
			.prependTo($container)
			.on('click', $.proxy(function(e) {
				this.prev(options.navSpeed);
			}, this));
		this._controls.$next
			.addClass(options.navClass[1])
			.html(options.navText[1])
			.hide()
			.appendTo($container)
			.on('click', $.proxy(function(e) {
				this.next(options.navSpeed);
			}, this));

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	}

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			this._controls[control].remove();
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	}

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			options = this._core.settings,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			size = options.center || options.autoWidth || options.dotData
				? 1 : options.dotsEach || options.items;

		if (options.slideBy !== 'page') {
			options.slideBy = Math.min(options.slideBy, options.items);
		}

		if (options.dots || options.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: i - lower,
						end: i - lower + size - 1
					});
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	}

	/**
	 * Draws the user interface.
	 * @todo The option `dotData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference, i, html = '',
			options = this._core.settings,
			$items = this._core.$stage.children(),
			index = this._core.relative(this._core.current());

		if (options.nav && !options.loop && !options.navRewind) {
			this._controls.$previous.toggleClass('disabled', index <= 0);
			this._controls.$next.toggleClass('disabled', index >= this._core.maximum());
		}

		this._controls.$previous.toggle(options.nav);
		this._controls.$next.toggle(options.nav);

		if (options.dots) {
			difference = this._pages.length - this._controls.$indicators.children().length;

			if (options.dotData && difference !== 0) {
				for (i = 0; i < this._controls.$indicators.children().length; i++) {
					html += this._templates[this._core.relative(i)];
				}
				this._controls.$indicators.html(html);
			} else if (difference > 0) {
				html = new Array(difference + 1).join(this._templates[0]);
				this._controls.$indicators.append(html);
			} else if (difference < 0) {
				this._controls.$indicators.children().slice(difference).remove();
			}

			this._controls.$indicators.find('.active').removeClass('active');
			this._controls.$indicators.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}

		this._controls.$indicators.toggle(options.dots);
	}

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotData
				? 1 : settings.dotsEach || settings.items)
		};
	}

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var index = this._core.relative(this._core.current());
		return $.grep(this._pages, function(o) {
			return o.start <= index && o.end >= index;
		}).pop();
	}

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			options = this._core.settings;

		if (options.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += options.slideBy : position -= options.slideBy;
		}
		return position;
	}

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	}

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	}

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	}

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.0.0
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash table for the hashes.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function() {
				if (this._core.settings.startPosition == 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				var hash = $(e.content).find('[data-hash]').andSelf('[data-hash]').attr('data-hash');
				this._hashes[hash] = e.content;
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function() {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]) || 0;

			if (!hash) {
				return false;
			}

			this._core.to(position, false, true);
		}, this));
	}

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	}

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	}

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);
// source --> https://www.crestdatasys.com/wp-content/plugins/smart-logo-showcase-lite/js/tooltipster.bundle.js?ver=1.1.2 
/**
 * tooltipster http://iamceege.github.io/tooltipster/
 * A rockin' custom tooltip jQuery plugin
 * Developed by Caleb Jacob and Louis Ameline
 * MIT license
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(["jquery"], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"));
  } else {
    factory(jQuery);
  }
}(this, function ($) {

// This file will be UMDified by a build task.

var defaults = {
		animation: 'fade',
		animationDuration: 350,
		content: null,
		contentAsHTML: false,
		contentCloning: false,
		debug: true,
		delay: 300,
		delayTouch: [300, 500],
		functionInit: null,
		functionBefore: null,
		functionReady: null,
		functionAfter: null,
		functionFormat: null,
		IEmin: 6,
		interactive: false,
		multiple: false,
		// must be 'body' for now, or an element positioned at (0, 0)
		// in the document, typically like the very top views of an app.
		parent: 'body',
		plugins: ['sideTip'],
		repositionOnScroll: false,
		restoration: 'none',
		selfDestruction: true,
		theme: [],
		timer: 0,
		trackerInterval: 500,
		trackOrigin: false,
		trackTooltip: false,
		trigger: 'hover',
		triggerClose: {
			click: false,
			mouseleave: false,
			originClick: false,
			scroll: false,
			tap: false,
			touchleave: false
		},
		triggerOpen: {
			click: false,
			mouseenter: false,
			tap: false,
			touchstart: false
		},
		updateAnimation: 'rotate',
		zIndex: 9999999
	},
	// we'll avoid using the 'window' global as a good practice but npm's
	// jquery@<2.1.0 package actually requires a 'window' global, so not sure
	// it's useful at all
	win = (typeof window != 'undefined') ? window : null,
	// env will be proxied by the core for plugins to have access its properties
	env = {
		// detect if this device can trigger touch events. Better have a false
		// positive (unused listeners, that's ok) than a false negative.
		// https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js
		// http://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript
		hasTouchCapability: !!(
			win
			&&	(	'ontouchstart' in win
				||	(win.DocumentTouch && win.document instanceof win.DocumentTouch)
				||	win.navigator.maxTouchPoints
			)
		),
		hasTransitions: transitionSupport(),
		IE: false,
		// don't set manually, it will be updated by a build task after the manifest
		semVer: '4.1.6',
		window: win
	},
	core = function() {
		
		// core variables
		
		// the core emitters
		this.__$emitterPrivate = $({});
		this.__$emitterPublic = $({});
		this.__instancesLatestArr = [];
		// collects plugin constructors
		this.__plugins = {};
		// proxy env variables for plugins who might use them
		this._env = env;
	};

// core methods
core.prototype = {
	
	/**
	 * A function to proxy the public methods of an object onto another
	 *
	 * @param {object} constructor The constructor to bridge
	 * @param {object} obj The object that will get new methods (an instance or the core)
	 * @param {string} pluginName A plugin name for the console log message
	 * @return {core}
	 * @private
	 */
	__bridge: function(constructor, obj, pluginName) {
		
		// if it's not already bridged
		if (!obj[pluginName]) {
			
			var fn = function() {};
			fn.prototype = constructor;
			
			var pluginInstance = new fn();
			
			// the _init method has to exist in instance constructors but might be missing
			// in core constructors
			if (pluginInstance.__init) {
				pluginInstance.__init(obj);
			}
			
			$.each(constructor, function(methodName, fn) {
				
				// don't proxy "private" methods, only "protected" and public ones
				if (methodName.indexOf('__') != 0) {
					
					// if the method does not exist yet
					if (!obj[methodName]) {
						
						obj[methodName] = function() {
							return pluginInstance[methodName].apply(pluginInstance, Array.prototype.slice.apply(arguments));
						};
						
						// remember to which plugin this method corresponds (several plugins may
						// have methods of the same name, we need to be sure)
						obj[methodName].bridged = pluginInstance;
					}
					else if (defaults.debug) {
						
						console.log('The '+ methodName +' method of the '+ pluginName
							+' plugin conflicts with another plugin or native methods');
					}
				}
			});
			
			obj[pluginName] = pluginInstance;
		}
		
		return this;
	},
	
	/**
	 * For mockup in Node env if need be, for testing purposes
	 *
	 * @return {core}
	 * @private
	 */
	__setWindow: function(window) {
		env.window = window;
		return this;
	},
	
	/**
	 * Returns a ruler, a tool to help measure the size of a tooltip under
	 * various settings. Meant for plugins
	 * 
	 * @see Ruler
	 * @return {object} A Ruler instance
	 * @protected
	 */
	_getRuler: function($tooltip) {
		return new Ruler($tooltip);
	},
	
	/**
	 * For internal use by plugins, if needed
	 *
	 * @return {core}
	 * @protected
	 */
	_off: function() {
		this.__$emitterPrivate.off.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments));
		return this;
	},
	
	/**
	 * For internal use by plugins, if needed
	 *
	 * @return {core}
	 * @protected
	 */
	_on: function() {
		this.__$emitterPrivate.on.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments));
		return this;
	},
	
	/**
	 * For internal use by plugins, if needed
	 *
	 * @return {core}
	 * @protected
	 */
	_one: function() {
		this.__$emitterPrivate.one.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments));
		return this;
	},
	
	/**
	 * Returns (getter) or adds (setter) a plugin
	 *
	 * @param {string|object} plugin Provide a string (in the full form
	 * "namespace.name") to use as as getter, an object to use as a setter
	 * @return {object|core}
	 * @protected
	 */
	_plugin: function(plugin) {
		
		var self = this;
		
		// getter
		if (typeof plugin == 'string') {
			
			var pluginName = plugin,
				p = null;
			
			// if the namespace is provided, it's easy to search
			if (pluginName.indexOf('.') > 0) {
				p = self.__plugins[pluginName];
			}
			// otherwise, return the first name that matches
			else {
				$.each(self.__plugins, function(i, plugin) {
					
					if (plugin.name.substring(plugin.name.length - pluginName.length - 1) == '.'+ pluginName) {
						p = plugin;
						return false;
					}
				});
			}
			
			return p;
		}
		// setter
		else {
			
			// force namespaces
			if (plugin.name.indexOf('.') < 0) {
				throw new Error('Plugins must be namespaced');
			}
			
			self.__plugins[plugin.name] = plugin;
			
			// if the plugin has core features
			if (plugin.core) {
				
				// bridge non-private methods onto the core to allow new core methods
				self.__bridge(plugin.core, self, plugin.name);
			}
			
			return this;
		}
	},
	
	/**
	 * Trigger events on the core emitters
	 * 
	 * @returns {core}
	 * @protected
	 */
	_trigger: function() {
		
		var args = Array.prototype.slice.apply(arguments);
		
		if (typeof args[0] == 'string') {
			args[0] = { type: args[0] };
		}
		
		// note: the order of emitters matters
		this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate, args);
		this.__$emitterPublic.trigger.apply(this.__$emitterPublic, args);
		
		return this;
	},
	
	/**
	 * Returns instances of all tooltips in the page or an a given element
	 *
	 * @param {string|HTML object collection} selector optional Use this
	 * parameter to restrict the set of objects that will be inspected
	 * for the retrieval of instances. By default, all instances in the
	 * page are returned.
	 * @return {array} An array of instance objects
	 * @public
	 */
	instances: function(selector) {
		
		var instances = [],
			sel = selector || '.tooltipstered';
		
		$(sel).each(function() {
			
			var $this = $(this),
				ns = $this.data('tooltipster-ns');
			
			if (ns) {
				
				$.each(ns, function(i, namespace) {
					instances.push($this.data(namespace));
				});
			}
		});
		
		return instances;
	},
	
	/**
	 * Returns the Tooltipster objects generated by the last initializing call
	 *
	 * @return {array} An array of instance objects
	 * @public
	 */
	instancesLatest: function() {
		return this.__instancesLatestArr;
	},
	
	/**
	 * For public use only, not to be used by plugins (use ::_off() instead)
	 *
	 * @return {core}
	 * @public
	 */
	off: function() {
		this.__$emitterPublic.off.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments));
		return this;
	},
	
	/**
	 * For public use only, not to be used by plugins (use ::_on() instead)
	 *
	 * @return {core}
	 * @public
	 */
	on: function() {
		this.__$emitterPublic.on.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments));
		return this;
	},
	
	/**
	 * For public use only, not to be used by plugins (use ::_one() instead)
	 * 
	 * @return {core}
	 * @public
	 */
	one: function() {
		this.__$emitterPublic.one.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments));
		return this;
	},
	
	/**
	 * Returns all HTML elements which have one or more tooltips
	 *
	 * @param {string} selector optional Use this to restrict the results
	 * to the descendants of an element
	 * @return {array} An array of HTML elements
	 * @public
	 */
	origins: function(selector) {
		
		var sel = selector ?
			selector +' ' :
			'';
		
		return $(sel +'.tooltipstered').toArray();
	},
	
	/**
	 * Change default options for all future instances
	 *
	 * @param {object} d The options that should be made defaults
	 * @return {core}
	 * @public
	 */
	setDefaults: function(d) {
		$.extend(defaults, d);
		return this;
	},
	
	/**
	 * For users to trigger their handlers on the public emitter
	 * 
	 * @returns {core}
	 * @public
	 */
	triggerHandler: function() {
		this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments));
		return this;
	}
};

// $.tooltipster will be used to call core methods
$.tooltipster = new core();

// the Tooltipster instance class (mind the capital T)
$.Tooltipster = function(element, options) {
	
	// list of instance variables
	
	// stack of custom callbacks provided as parameters to API methods
	this.__callbacks = {
		close: [],
		open: []
	};
	// the schedule time of DOM removal
	this.__closingTime;
	// this will be the user content shown in the tooltip. A capital "C" is used
	// because there is also a method called content()
	this.__Content;
	// for the size tracker
	this.__contentBcr;
	// to disable the tooltip once the destruction has begun
	this.__destroyed = false;
	this.__destroying = false;
	// we can't emit directly on the instance because if a method with the same
	// name as the event exists, it will be called by jQuery. Se we use a plain
	// object as emitter. This emitter is for internal use by plugins,
	// if needed.
	this.__$emitterPrivate = $({});
	// this emitter is for the user to listen to events without risking to mess
	// with our internal listeners
	this.__$emitterPublic = $({});
	this.__enabled = true;
	// the reference to the gc interval
	this.__garbageCollector;
	// various position and size data recomputed before each repositioning
	this.__Geometry;
	// the tooltip position, saved after each repositioning by a plugin
	this.__lastPosition;
	// a unique namespace per instance
	this.__namespace = 'tooltipster-'+ Math.round(Math.random()*1000000);
	this.__options;
	// will be used to support origins in scrollable areas
	this.__$originParents;
	this.__pointerIsOverOrigin = false;
	// to remove themes if needed
	this.__previousThemes = [];
	// the state can be either: appearing, stable, disappearing, closed
	this.__state = 'closed';
	// timeout references
	this.__timeouts = {
		close: [],
		open: null
	};
	// store touch events to be able to detect emulated mouse events
	this.__touchEvents = [];
	// the reference to the tracker interval
	this.__tracker = null;
	// the element to which this tooltip is associated
	this._$origin;
	// this will be the tooltip element (jQuery wrapped HTML element).
	// It's the job of a plugin to create it and append it to the DOM
	this._$tooltip;
	
	// launch
	this.__init(element, options);
};

$.Tooltipster.prototype = {
	
	/**
	 * @param origin
	 * @param options
	 * @private
	 */
	__init: function(origin, options) {
		
		var self = this;
		
		self._$origin = $(origin);
		self.__options = $.extend(true, {}, defaults, options);
		
		// some options may need to be reformatted
		self.__optionsFormat();
		
		// don't run on old IE if asked no to
		if (	!env.IE
			||	env.IE >= self.__options.IEmin
		) {
			
			// note: the content is null (empty) by default and can stay that
			// way if the plugin remains initialized but not fed any content. The
			// tooltip will just not appear.
			
			// let's save the initial value of the title attribute for later
			// restoration if need be.
			var initialTitle = null;
			
			// it will already have been saved in case of multiple tooltips
			if (self._$origin.data('tooltipster-initialTitle') === undefined) {
				
				initialTitle = self._$origin.attr('title');
				
				// we do not want initialTitle to be "undefined" because
				// of how jQuery's .data() method works
				if (initialTitle === undefined) initialTitle = null;
				
				self._$origin.data('tooltipster-initialTitle', initialTitle);
			}
			
			// If content is provided in the options, it has precedence over the
			// title attribute.
			// Note: an empty string is considered content, only 'null' represents
			// the absence of content.
			// Also, an existing title="" attribute will result in an empty string
			// content
			if (self.__options.content !== null) {
				self.__contentSet(self.__options.content);
			}
			else {
				
				var selector = self._$origin.attr('data-tooltip-content'),
					$el;
				
				if (selector){
					$el = $(selector);
				}
				
				if ($el && $el[0]) {
					self.__contentSet($el.first());
				}
				else {
					self.__contentSet(initialTitle);
				}
			}
			
			self._$origin
				// strip the title off of the element to prevent the default tooltips
				// from popping up
				.removeAttr('title')
				// to be able to find all instances on the page later (upon window
				// events in particular)
				.addClass('tooltipstered');
			
			// set listeners on the origin
			self.__prepareOrigin();
			
			// set the garbage collector
			self.__prepareGC();
			
			// init plugins
			$.each(self.__options.plugins, function(i, pluginName) {
				self._plug(pluginName);
			});
			
			// to detect swiping
			if (env.hasTouchCapability) {
				$('body').on('touchmove.'+ self.__namespace +'-triggerOpen', function(event) {
					self._touchRecordEvent(event);
				});
			}
			
			self
				// prepare the tooltip when it gets created. This event must
				// be fired by a plugin
				._on('created', function() {
					self.__prepareTooltip();
				})
				// save position information when it's sent by a plugin
				._on('repositioned', function(e) {
					self.__lastPosition = e.position;
				});
		}
		else {
			self.__options.disabled = true;
		}
	},
	
	/**
	 * Insert the content into the appropriate HTML element of the tooltip
	 * 
	 * @returns {self}
	 * @private
	 */
	__contentInsert: function() {
		
		var self = this,
			$el = self._$tooltip.find('.tooltipster-content'),
			formattedContent = self.__Content,
			format = function(content) {
				formattedContent = content;
			};
		
		self._trigger({
			type: 'format',
			content: self.__Content,
			format: format
		});
		
		if (self.__options.functionFormat) {
			
			formattedContent = self.__options.functionFormat.call(
				self,
				self,
				{ origin: self._$origin[0] },
				self.__Content
			);
		}
		
		if (typeof formattedContent === 'string' && !self.__options.contentAsHTML) {
			$el.text(formattedContent);
		}
		else {
			$el
				.empty()
				.append(formattedContent);
		}
		
		return self;
	},
	
	/**
	 * Save the content, cloning it beforehand if need be
	 * 
	 * @param content
	 * @returns {self}
	 * @private
	 */
	__contentSet: function(content) {
		
		// clone if asked. Cloning the object makes sure that each instance has its
		// own version of the content (in case a same object were provided for several
		// instances)
		// reminder: typeof null === object
		if (content instanceof $ && this.__options.contentCloning) {
			content = content.clone(true);
		}
		
		this.__Content = content;
		
		this._trigger({
			type: 'updated',
			content: content
		});
		
		return this;
	},
	
	/**
	 * Error message about a method call made after destruction
	 * 
	 * @private
	 */
	__destroyError: function() {
		throw new Error('This tooltip has been destroyed and cannot execute your method call.');
	},
	
	/**
	 * Gather all information about dimensions and available space,
	 * called before every repositioning
	 * 
	 * @private
	 * @returns {object}
	 */
	__geometry: function() {
		
		var	self = this,
			$target = self._$origin,
			originIsArea = self._$origin.is('area');
		
		// if this._$origin is a map area, the target we'll need
		// the dimensions of is actually the image using the map,
		// not the area itself
		if (originIsArea) {
			
			var mapName = self._$origin.parent().attr('name');
			
			$target = $('img[usemap="#'+ mapName +'"]');
		}
		
		var bcr = $target[0].getBoundingClientRect(),
			$document = $(env.window.document),
			$window = $(env.window),
			$parent = $target,
			// some useful properties of important elements
			geo = {
				// available space for the tooltip, see down below
				available: {
					document: null,
					window: null
				},
				document: {
					size: {
						height: $document.height(),
						width: $document.width()
					}
				},
				window: {
					scroll: {
						// the second ones are for IE compatibility
						left: env.window.scrollX || env.window.document.documentElement.scrollLeft,
						top: env.window.scrollY || env.window.document.documentElement.scrollTop
					},
					size: {
						height: $window.height(),
						width: $window.width()
					}
				},
				origin: {
					// the origin has a fixed lineage if itself or one of its
					// ancestors has a fixed position
					fixedLineage: false,
					// relative to the document
					offset: {},
					size: {
						height: bcr.bottom - bcr.top,
						width: bcr.right - bcr.left
					},
					usemapImage: originIsArea ? $target[0] : null,
					// relative to the window
					windowOffset: {
						bottom: bcr.bottom,
						left: bcr.left,
						right: bcr.right,
						top: bcr.top
					}
				}
			},
			geoFixed = false;
		
		// if the element is a map area, some properties may need
		// to be recalculated
		if (originIsArea) {
			
			var shape = self._$origin.attr('shape'),
				coords = self._$origin.attr('coords');
			
			if (coords) {
				
				coords = coords.split(',');
				
				$.map(coords, function(val, i) {
					coords[i] = parseInt(val);
				});
			}
			
			// if the image itself is the area, nothing more to do
			if (shape != 'default') {
				
				switch(shape) {
					
					case 'circle':
						
						var circleCenterLeft = coords[0],
							circleCenterTop = coords[1],
							circleRadius = coords[2],
							areaTopOffset = circleCenterTop - circleRadius,
							areaLeftOffset = circleCenterLeft - circleRadius;
						
						geo.origin.size.height = circleRadius * 2;
						geo.origin.size.width = geo.origin.size.height;
						
						geo.origin.windowOffset.left += areaLeftOffset;
						geo.origin.windowOffset.top += areaTopOffset;
						
						break;
					
					case 'rect':
						
						var areaLeft = coords[0],
							areaTop = coords[1],
							areaRight = coords[2],
							areaBottom = coords[3];
						
						geo.origin.size.height = areaBottom - areaTop;
						geo.origin.size.width = areaRight - areaLeft;
						
						geo.origin.windowOffset.left += areaLeft;
						geo.origin.windowOffset.top += areaTop;
						
						break;
					
					case 'poly':
						
						var areaSmallestX = 0,
							areaSmallestY = 0,
							areaGreatestX = 0,
							areaGreatestY = 0,
							arrayAlternate = 'even';
						
						for (var i = 0; i < coords.length; i++) {
							
							var areaNumber = coords[i];
							
							if (arrayAlternate == 'even') {
								
								if (areaNumber > areaGreatestX) {
									
									areaGreatestX = areaNumber;
									
									if (i === 0) {
										areaSmallestX = areaGreatestX;
									}
								}
								
								if (areaNumber < areaSmallestX) {
									areaSmallestX = areaNumber;
								}
								
								arrayAlternate = 'odd';
							}
							else {
								if (areaNumber > areaGreatestY) {
									
									areaGreatestY = areaNumber;
									
									if (i == 1) {
										areaSmallestY = areaGreatestY;
									}
								}
								
								if (areaNumber < areaSmallestY) {
									areaSmallestY = areaNumber;
								}
								
								arrayAlternate = 'even';
							}
						}
						
						geo.origin.size.height = areaGreatestY - areaSmallestY;
						geo.origin.size.width = areaGreatestX - areaSmallestX;
						
						geo.origin.windowOffset.left += areaSmallestX;
						geo.origin.windowOffset.top += areaSmallestY;
						
						break;
				}
			}
		}
		
		// user callback through an event
		var edit = function(r) {
			geo.origin.size.height = r.height,
				geo.origin.windowOffset.left = r.left,
				geo.origin.windowOffset.top = r.top,
				geo.origin.size.width = r.width
		};
		
		self._trigger({
			type: 'geometry',
			edit: edit,
			geometry: {
				height: geo.origin.size.height,
				left: geo.origin.windowOffset.left,
				top: geo.origin.windowOffset.top,
				width: geo.origin.size.width
			}
		});
		
		// calculate the remaining properties with what we got
		
		geo.origin.windowOffset.right = geo.origin.windowOffset.left + geo.origin.size.width;
		geo.origin.windowOffset.bottom = geo.origin.windowOffset.top + geo.origin.size.height;
		
		geo.origin.offset.left = geo.origin.windowOffset.left + geo.window.scroll.left;
		geo.origin.offset.top = geo.origin.windowOffset.top + geo.window.scroll.top;
		geo.origin.offset.bottom = geo.origin.offset.top + geo.origin.size.height;
		geo.origin.offset.right = geo.origin.offset.left + geo.origin.size.width;
		
		// the space that is available to display the tooltip relatively to the document
		geo.available.document = {
			bottom: {
				height: geo.document.size.height - geo.origin.offset.bottom,
				width: geo.document.size.width
			},
			left: {
				height: geo.document.size.height,
				width: geo.origin.offset.left
			},
			right: {
				height: geo.document.size.height,
				width: geo.document.size.width - geo.origin.offset.right
			},
			top: {
				height: geo.origin.offset.top,
				width: geo.document.size.width
			}
		};
		
		// the space that is available to display the tooltip relatively to the viewport
		// (the resulting values may be negative if the origin overflows the viewport)
		geo.available.window = {
			bottom: {
				// the inner max is here to make sure the available height is no bigger
				// than the viewport height (when the origin is off screen at the top).
				// The outer max just makes sure that the height is not negative (when
				// the origin overflows at the bottom).
				height: Math.max(geo.window.size.height - Math.max(geo.origin.windowOffset.bottom, 0), 0),
				width: geo.window.size.width
			},
			left: {
				height: geo.window.size.height,
				width: Math.max(geo.origin.windowOffset.left, 0)
			},
			right: {
				height: geo.window.size.height,
				width: Math.max(geo.window.size.width - Math.max(geo.origin.windowOffset.right, 0), 0)
			},
			top: {
				height: Math.max(geo.origin.windowOffset.top, 0),
				width: geo.window.size.width
			}
		};
		
		while ($parent[0].tagName.toLowerCase() != 'html') {
			
			if ($parent.css('position') == 'fixed') {
				geo.origin.fixedLineage = true;
				break;
			}
			
			$parent = $parent.parent();
		}
		
		return geo;
	},
	
	/**
	 * Some options may need to be formated before being used
	 * 
	 * @returns {self}
	 * @private
	 */
	__optionsFormat: function() {
		
		if (typeof this.__options.animationDuration == 'number') {
			this.__options.animationDuration = [this.__options.animationDuration, this.__options.animationDuration];
		}
		
		if (typeof this.__options.delay == 'number') {
			this.__options.delay = [this.__options.delay, this.__options.delay];
		}
		
		if (typeof this.__options.delayTouch == 'number') {
			this.__options.delayTouch = [this.__options.delayTouch, this.__options.delayTouch];
		}
		
		if (typeof this.__options.theme == 'string') {
			this.__options.theme = [this.__options.theme];
		}
		
		// determine the future parent
		if (typeof this.__options.parent == 'string') {
			this.__options.parent = $(this.__options.parent);
		}
		
		if (this.__options.trigger == 'hover') {
			
			this.__options.triggerOpen = {
				mouseenter: true,
				touchstart: true
			};
			
			this.__options.triggerClose = {
				mouseleave: true,
				originClick: true,
				touchleave: true
			};
		}
		else if (this.__options.trigger == 'click') {
			
			this.__options.triggerOpen = {
				click: true,
				tap: true
			};
			
			this.__options.triggerClose = {
				click: true,
				tap: true
			};
		}
		
		// for the plugins
		this._trigger('options');
		
		return this;
	},
	
	/**
	 * Schedules or cancels the garbage collector task
	 *
	 * @returns {self}
	 * @private
	 */
	__prepareGC: function() {
		
		var self = this;
		
		// in case the selfDestruction option has been changed by a method call
		if (self.__options.selfDestruction) {
			
			// the GC task
			self.__garbageCollector = setInterval(function() {
				
				var now = new Date().getTime();
				
				// forget the old events
				self.__touchEvents = $.grep(self.__touchEvents, function(event, i) {
					// 1 minute
					return now - event.time > 60000;
				});
				
				// auto-destruct if the origin is gone
				if (!bodyContains(self._$origin)) {
					self.destroy();
				}
			}, 20000);
		}
		else {
			clearInterval(self.__garbageCollector);
		}
		
		return self;
	},
	
	/**
	 * Sets listeners on the origin if the open triggers require them.
	 * Unlike the listeners set at opening time, these ones
	 * remain even when the tooltip is closed. It has been made a
	 * separate method so it can be called when the triggers are
	 * changed in the options. Closing is handled in _open()
	 * because of the bindings that may be needed on the tooltip
	 * itself
	 *
	 * @returns {self}
	 * @private
	 */
	__prepareOrigin: function() {
		
		var self = this;
		
		// in case we're resetting the triggers
		self._$origin.off('.'+ self.__namespace +'-triggerOpen');
		
		// if the device is touch capable, even if only mouse triggers
		// are asked, we need to listen to touch events to know if the mouse
		// events are actually emulated (so we can ignore them)
		if (env.hasTouchCapability) {
			
			self._$origin.on(
				'touchstart.'+ self.__namespace +'-triggerOpen ' +
				'touchend.'+ self.__namespace +'-triggerOpen ' +
				'touchcancel.'+ self.__namespace +'-triggerOpen',
				function(event){
					self._touchRecordEvent(event);
				}
			);
		}
		
		// mouse click and touch tap work the same way
		if (	self.__options.triggerOpen.click
			||	(self.__options.triggerOpen.tap && env.hasTouchCapability)
		) {
			
			var eventNames = '';
			if (self.__options.triggerOpen.click) {
				eventNames += 'click.'+ self.__namespace +'-triggerOpen ';
			}
			if (self.__options.triggerOpen.tap && env.hasTouchCapability) {
				eventNames += 'touchend.'+ self.__namespace +'-triggerOpen';
			}
			
			self._$origin.on(eventNames, function(event) {
				if (self._touchIsMeaningfulEvent(event)) {
					self._open(event);
				}
			});
		}
		
		// mouseenter and touch start work the same way
		if (	self.__options.triggerOpen.mouseenter
			||	(self.__options.triggerOpen.touchstart && env.hasTouchCapability)
		) {
			
			var eventNames = '';
			if (self.__options.triggerOpen.mouseenter) {
				eventNames += 'mouseenter.'+ self.__namespace +'-triggerOpen ';
			}
			if (self.__options.triggerOpen.touchstart && env.hasTouchCapability) {
				eventNames += 'touchstart.'+ self.__namespace +'-triggerOpen';
			}
			
			self._$origin.on(eventNames, function(event) {
				if (	self._touchIsTouchEvent(event)
					||	!self._touchIsEmulatedEvent(event)
				) {
					self.__pointerIsOverOrigin = true;
					self._openShortly(event);
				}
			});
		}
		
		// info for the mouseleave/touchleave close triggers when they use a delay
		if (	self.__options.triggerClose.mouseleave
			||	(self.__options.triggerClose.touchleave && env.hasTouchCapability)
		) {
			
			var eventNames = '';
			if (self.__options.triggerClose.mouseleave) {
				eventNames += 'mouseleave.'+ self.__namespace +'-triggerOpen ';
			}
			if (self.__options.triggerClose.touchleave && env.hasTouchCapability) {
				eventNames += 'touchend.'+ self.__namespace +'-triggerOpen touchcancel.'+ self.__namespace +'-triggerOpen';
			}
			
			self._$origin.on(eventNames, function(event) {
				
				if (self._touchIsMeaningfulEvent(event)) {
					self.__pointerIsOverOrigin = false;
				}
			});
		}
		
		return self;
	},
	
	/**
	 * Do the things that need to be done only once after the tooltip
	 * HTML element it has been created. It has been made a separate
	 * method so it can be called when options are changed. Remember
	 * that the tooltip may actually exist in the DOM before it is
	 * opened, and present after it has been closed: it's the display
	 * plugin that takes care of handling it.
	 * 
	 * @returns {self}
	 * @private
	 */
	__prepareTooltip: function() {
		
		var self = this,
			p = self.__options.interactive ? 'auto' : '';
		
		// this will be useful to know quickly if the tooltip is in
		// the DOM or not 
		self._$tooltip
			.attr('id', self.__namespace)
			.css({
				// pointer events
				'pointer-events': p,
				zIndex: self.__options.zIndex
			});
		
		// themes
		// remove the old ones and add the new ones
		$.each(self.__previousThemes, function(i, theme) {
			self._$tooltip.removeClass(theme);
		});
		$.each(self.__options.theme, function(i, theme) {
			self._$tooltip.addClass(theme);
		});
		
		self.__previousThemes = $.merge([], self.__options.theme);
		
		return self;
	},
	
	/**
	 * Handles the scroll on any of the parents of the origin (when the
	 * tooltip is open)
	 *
	 * @param {object} event
	 * @returns {self}
	 * @private
	 */
	__scrollHandler: function(event) {
		
		var self = this;
		
		if (self.__options.triggerClose.scroll) {
			self._close(event);
		}
		else {
			
			// if the scroll happened on the window
			if (event.target === env.window.document) {
				
				// if the origin has a fixed lineage, window scroll will have no
				// effect on its position nor on the position of the tooltip
				if (!self.__Geometry.origin.fixedLineage) {
					
					// we don't need to do anything unless repositionOnScroll is true
					// because the tooltip will already have moved with the window
					// (and of course with the origin)
					if (self.__options.repositionOnScroll) {
						self.reposition(event);
					}
				}
			}
			// if the scroll happened on another parent of the tooltip, it means
			// that it's in a scrollable area and now needs to have its position
			// adjusted or recomputed, depending ont the repositionOnScroll
			// option. Also, if the origin is partly hidden due to a parent that
			// hides its overflow, we'll just hide (not close) the tooltip.
			else {
				
				var g = self.__geometry(),
					overflows = false;
				
				// a fixed position origin is not affected by the overflow hiding
				// of a parent
				if (self._$origin.css('position') != 'fixed') {
					
					self.__$originParents.each(function(i, el) {
						
						var $el = $(el),
							overflowX = $el.css('overflow-x'),
							overflowY = $el.css('overflow-y');
						
						if (overflowX != 'visible' || overflowY != 'visible') {
							
							var bcr = el.getBoundingClientRect();
							
							if (overflowX != 'visible') {
								
								if (	g.origin.windowOffset.left < bcr.left
									||	g.origin.windowOffset.right > bcr.right
								) {
									overflows = true;
									return false;
								}
							}
							
							if (overflowY != 'visible') {
								
								if (	g.origin.windowOffset.top < bcr.top
									||	g.origin.windowOffset.bottom > bcr.bottom
								) {
									overflows = true;
									return false;
								}
							}
						}
						
						// no need to go further if fixed, for the same reason as above
						if ($el.css('position') == 'fixed') {
							return false;
						}
					});
				}
				
				if (overflows) {
					self._$tooltip.css('visibility', 'hidden');
				}
				else {
					self._$tooltip.css('visibility', 'visible');
					
					// reposition
					if (self.__options.repositionOnScroll) {
						self.reposition(event);
					}
					// or just adjust offset
					else {
						
						// we have to use offset and not windowOffset because this way,
						// only the scroll distance of the scrollable areas are taken into
						// account (the scrolltop value of the main window must be
						// ignored since the tooltip already moves with it)
						var offsetLeft = g.origin.offset.left - self.__Geometry.origin.offset.left,
							offsetTop = g.origin.offset.top - self.__Geometry.origin.offset.top;
						
						// add the offset to the position initially computed by the display plugin
						self._$tooltip.css({
							left: self.__lastPosition.coord.left + offsetLeft,
							top: self.__lastPosition.coord.top + offsetTop
						});
					}
				}
			}
			
			self._trigger({
				type: 'scroll',
				event: event
			});
		}
		
		return self;
	},
	
	/**
	 * Changes the state of the tooltip
	 *
	 * @param {string} state
	 * @returns {self}
	 * @private
	 */
	__stateSet: function(state) {
		
		this.__state = state;
		
		this._trigger({
			type: 'state',
			state: state
		});
		
		return this;
	},
	
	/**
	 * Clear appearance timeouts
	 *
	 * @returns {self}
	 * @private
	 */
	__timeoutsClear: function() {
		
		// there is only one possible open timeout: the delayed opening
		// when the mouseenter/touchstart open triggers are used
		clearTimeout(this.__timeouts.open);
		this.__timeouts.open = null;
		
		// ... but several close timeouts: the delayed closing when the
		// mouseleave close trigger is used and the timer option
		$.each(this.__timeouts.close, function(i, timeout) {
			clearTimeout(timeout);
		});
		this.__timeouts.close = [];
		
		return this;
	},
	
	/**
	 * Start the tracker that will make checks at regular intervals
	 * 
	 * @returns {self}
	 * @private
	 */
	__trackerStart: function() {
		
		var self = this,
			$content = self._$tooltip.find('.tooltipster-content');
		
		// get the initial content size
		if (self.__options.trackTooltip) {
			self.__contentBcr = $content[0].getBoundingClientRect();
		}
		
		self.__tracker = setInterval(function() {
			
			// if the origin or tooltip elements have been removed.
			// Note: we could destroy the instance now if the origin has
			// been removed but we'll leave that task to our garbage collector
			if (!bodyContains(self._$origin) || !bodyContains(self._$tooltip)) {
				self._close();
			}
			// if everything is alright
			else {
				
				// compare the former and current positions of the origin to reposition
				// the tooltip if need be
				if (self.__options.trackOrigin) {
					
					var g = self.__geometry(),
						identical = false;
					
					// compare size first (a change requires repositioning too)
					if (areEqual(g.origin.size, self.__Geometry.origin.size)) {
						
						// for elements that have a fixed lineage (see __geometry()), we track the
						// top and left properties (relative to window)
						if (self.__Geometry.origin.fixedLineage) {
							if (areEqual(g.origin.windowOffset, self.__Geometry.origin.windowOffset)) {
								identical = true;
							}
						}
						// otherwise, track total offset (relative to document)
						else {
							if (areEqual(g.origin.offset, self.__Geometry.origin.offset)) {
								identical = true;
							}
						}
					}
					
					if (!identical) {
						
						// close the tooltip when using the mouseleave close trigger
						// (see https://github.com/iamceege/tooltipster/pull/253)
						if (self.__options.triggerClose.mouseleave) {
							self._close();
						}
						else {
							self.reposition();
						}
					}
				}
				
				if (self.__options.trackTooltip) {
					
					var currentBcr = $content[0].getBoundingClientRect();
					
					if (	currentBcr.height !== self.__contentBcr.height
						||	currentBcr.width !== self.__contentBcr.width
					) {
						self.reposition();
						self.__contentBcr = currentBcr;
					}
				}
			}
		}, self.__options.trackerInterval);
		
		return self;
	},
	
	/**
	 * Closes the tooltip (after the closing delay)
	 * 
	 * @param event
	 * @param callback
	 * @returns {self}
	 * @protected
	 */
	_close: function(event, callback) {
		
		var self = this,
			ok = true;
		
		self._trigger({
			type: 'close',
			event: event,
			stop: function() {
				ok = false;
			}
		});
		
		// a destroying tooltip may not refuse to close
		if (ok || self.__destroying) {
			
			// save the method custom callback and cancel any open method custom callbacks
			if (callback) self.__callbacks.close.push(callback);
			self.__callbacks.open = [];
			
			// clear open/close timeouts
			self.__timeoutsClear();
			
			var finishCallbacks = function() {
				
				// trigger any close method custom callbacks and reset them
				$.each(self.__callbacks.close, function(i,c) {
					c.call(self, self, {
						event: event,
						origin: self._$origin[0]
					});
				});
				
				self.__callbacks.close = [];
			};
			
			if (self.__state != 'closed') {
				
				var necessary = true,
					d = new Date(),
					now = d.getTime(),
					newClosingTime = now + self.__options.animationDuration[1];
				
				// the tooltip may already already be disappearing, but if a new
				// call to close() is made after the animationDuration was changed
				// to 0 (for example), we ought to actually close it sooner than
				// previously scheduled. In that case it should be noted that the
				// browser will not adapt the animation duration to the new
				// animationDuration that was set after the start of the closing
				// animation.
				// Note: the same thing could be considered at opening, but is not
				// really useful since the tooltip is actually opened immediately
				// upon a call to _open(). Since it would not make the opening
				// animation finish sooner, its sole impact would be to trigger the
				// state event and the open callbacks sooner than the actual end of
				// the opening animation, which is not great.
				if (self.__state == 'disappearing') {
					
					if (newClosingTime > self.__closingTime) {
						necessary = false;
					}
				}
				
				if (necessary) {
					
					self.__closingTime = newClosingTime;
					
					if (self.__state != 'disappearing') {
						self.__stateSet('disappearing');
					}
					
					var finish = function() {
						
						// stop the tracker
						clearInterval(self.__tracker);
						
						// a "beforeClose" option has been asked several times but would
						// probably useless since the content element is still accessible
						// via ::content(), and because people can always use listeners
						// inside their content to track what's going on. For the sake of
						// simplicity, this has been denied. Bur for the rare people who
						// really need the option (for old browsers or for the case where
						// detaching the content is actually destructive, for file or
						// password inputs for example), this event will do the work.
						self._trigger({
							type: 'closing',
							event: event
						});
						
						// unbind listeners which are no longer needed
						
						self._$tooltip
							.off('.'+ self.__namespace +'-triggerClose')
							.removeClass('tooltipster-dying');
						
						// orientationchange, scroll and resize listeners
						$(env.window).off('.'+ self.__namespace +'-triggerClose');
						
						// scroll listeners
						self.__$originParents.each(function(i, el) {
							$(el).off('scroll.'+ self.__namespace +'-triggerClose');
						});
						// clear the array to prevent memory leaks
						self.__$originParents = null;
						
						$('body').off('.'+ self.__namespace +'-triggerClose');
						
						self._$origin.off('.'+ self.__namespace +'-triggerClose');
						
						self._off('dismissable');
						
						// a plugin that would like to remove the tooltip from the
						// DOM when closed should bind on this
						self.__stateSet('closed');
						
						// trigger event
						self._trigger({
							type: 'after',
							event: event
						});
						
						// call our constructor custom callback function
						if (self.__options.functionAfter) {
							self.__options.functionAfter.call(self, self, {
								event: event,
								origin: self._$origin[0]
							});
						}
						
						// call our method custom callbacks functions
						finishCallbacks();
					};
					
					if (env.hasTransitions) {
						
						self._$tooltip.css({
							'-moz-animation-duration': self.__options.animationDuration[1] + 'ms',
							'-ms-animation-duration': self.__options.animationDuration[1] + 'ms',
							'-o-animation-duration': self.__options.animationDuration[1] + 'ms',
							'-webkit-animation-duration': self.__options.animationDuration[1] + 'ms',
							'animation-duration': self.__options.animationDuration[1] + 'ms',
							'transition-duration': self.__options.animationDuration[1] + 'ms'
						});
						
						self._$tooltip
							// clear both potential open and close tasks
							.clearQueue()
							.removeClass('tooltipster-show')
							// for transitions only
							.addClass('tooltipster-dying');
						
						if (self.__options.animationDuration[1] > 0) {
							self._$tooltip.delay(self.__options.animationDuration[1]);
						}
						
						self._$tooltip.queue(finish);
					}
					else {
						
						self._$tooltip
							.stop()
							.fadeOut(self.__options.animationDuration[1], finish);
					}
				}
			}
			// if the tooltip is already closed, we still need to trigger
			// the method custom callbacks
			else {
				finishCallbacks();
			}
		}
		
		return self;
	},
	
	/**
	 * For internal use by plugins, if needed
	 * 
	 * @returns {self}
	 * @protected
	 */
	_off: function() {
		this.__$emitterPrivate.off.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments));
		return this;
	},
	
	/**
	 * For internal use by plugins, if needed
	 *
	 * @returns {self}
	 * @protected
	 */
	_on: function() {
		this.__$emitterPrivate.on.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments));
		return this;
	},
	
	/**
	 * For internal use by plugins, if needed
	 *
	 * @returns {self}
	 * @protected
	 */
	_one: function() {
		this.__$emitterPrivate.one.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments));
		return this;
	},
	
	/**
	 * Opens the tooltip right away
	 *
	 * @param event
	 * @param callback
	 * @returns {self}
	 * @protected
	 */
	_open: function(event, callback) {
		
		var self = this;
		
		// if the destruction process has not begun and if this was not
		// triggered by an unwanted emulated click event
		if (!self.__destroying) {
			
			// check that the origin is still in the DOM
			if (	bodyContains(self._$origin)
				// if the tooltip is enabled
				&&	self.__enabled
			) {
				
				var ok = true;
				
				// if the tooltip is not open yet, we need to call functionBefore.
				// otherwise we can jst go on
				if (self.__state == 'closed') {
					
					// trigger an event. The event.stop function allows the callback
					// to prevent the opening of the tooltip
					self._trigger({
						type: 'before',
						event: event,
						stop: function() {
							ok = false;
						}
					});
					
					if (ok && self.__options.functionBefore) {
						
						// call our custom function before continuing
						ok = self.__options.functionBefore.call(self, self, {
							event: event,
							origin: self._$origin[0]
						});
					}
				}
				
				if (ok !== false) {
					
					// if there is some content
					if (self.__Content !== null) {
						
						// save the method callback and cancel close method callbacks
						if (callback) {
							self.__callbacks.open.push(callback);
						}
						self.__callbacks.close = [];
						
						// get rid of any appearance timeouts
						self.__timeoutsClear();
						
						var extraTime,
							finish = function() {
								
								if (self.__state != 'stable') {
									self.__stateSet('stable');
								}
								
								// trigger any open method custom callbacks and reset them
								$.each(self.__callbacks.open, function(i,c) {
									c.call(self, self, {
										origin: self._$origin[0],
										tooltip: self._$tooltip[0]
									});
								});
								
								self.__callbacks.open = [];
							};
						
						// if the tooltip is already open
						if (self.__state !== 'closed') {
							
							// the timer (if any) will start (or restart) right now
							extraTime = 0;
							
							// if it was disappearing, cancel that
							if (self.__state === 'disappearing') {
								
								self.__stateSet('appearing');
								
								if (env.hasTransitions) {
									
									self._$tooltip
										.clearQueue()
										.removeClass('tooltipster-dying')
										.addClass('tooltipster-show');
									
									if (self.__options.animationDuration[0] > 0) {
										self._$tooltip.delay(self.__options.animationDuration[0]);
									}
									
									self._$tooltip.queue(finish);
								}
								else {
									// in case the tooltip was currently fading out, bring it back
									// to life
									self._$tooltip
										.stop()
										.fadeIn(finish);
								}
							}
							// if the tooltip is already open, we still need to trigger the method
							// custom callback
							else if (self.__state == 'stable') {
								finish();
							}
						}
						// if the tooltip isn't already open, open it
						else {
							
							// a plugin must bind on this and store the tooltip in this._$tooltip
							self.__stateSet('appearing');
							
							// the timer (if any) will start when the tooltip has fully appeared
							// after its transition
							extraTime = self.__options.animationDuration[0];
							
							// insert the content inside the tooltip
							self.__contentInsert();
							
							// reposition the tooltip and attach to the DOM
							self.reposition(event, true);
							
							// animate in the tooltip. If the display plugin wants no css
							// animations, it may override the animation option with a
							// dummy value that will produce no effect
							if (env.hasTransitions) {
								
								// note: there seems to be an issue with start animations which
								// are randomly not played on fast devices in both Chrome and FF,
								// couldn't find a way to solve it yet. It seems that applying
								// the classes before appending to the DOM helps a little, but
								// it messes up some CSS transitions. The issue almost never
								// happens when delay[0]==0 though
								self._$tooltip
									.addClass('tooltipster-'+ self.__options.animation)
									.addClass('tooltipster-initial')
									.css({
										'-moz-animation-duration': self.__options.animationDuration[0] + 'ms',
										'-ms-animation-duration': self.__options.animationDuration[0] + 'ms',
										'-o-animation-duration': self.__options.animationDuration[0] + 'ms',
										'-webkit-animation-duration': self.__options.animationDuration[0] + 'ms',
										'animation-duration': self.__options.animationDuration[0] + 'ms',
										'transition-duration': self.__options.animationDuration[0] + 'ms'
									});
								
								setTimeout(
									function() {
										
										// a quick hover may have already triggered a mouseleave
										if (self.__state != 'closed') {
											
											self._$tooltip
												.addClass('tooltipster-show')
												.removeClass('tooltipster-initial');
											
											if (self.__options.animationDuration[0] > 0) {
												self._$tooltip.delay(self.__options.animationDuration[0]);
											}
											
											self._$tooltip.queue(finish);
										}
									},
									0
								);
							}
							else {
								
								// old browsers will have to live with this
								self._$tooltip
									.css('display', 'none')
									.fadeIn(self.__options.animationDuration[0], finish);
							}
							
							// checks if the origin is removed while the tooltip is open
							self.__trackerStart();
							
							// NOTE: the listeners below have a '-triggerClose' namespace
							// because we'll remove them when the tooltip closes (unlike
							// the '-triggerOpen' listeners). So some of them are actually
							// not about close triggers, rather about positioning.
							
							$(env.window)
								// reposition on resize
								.on('resize.'+ self.__namespace +'-triggerClose', function(e) {
									
									var $ae = $(document.activeElement);
									
									// reposition only if the resize event was not triggered upon the opening
									// of a virtual keyboard due to an input field being focused within the tooltip
									// (otherwise the repositioning would lose the focus)
									if (	(!$ae.is('input') && !$ae.is('textarea'))
										||	!$.contains(self._$tooltip[0], $ae[0])
									) {
										self.reposition(e);
									}
								})
								// same as below for parents
								.on('scroll.'+ self.__namespace +'-triggerClose', function(e) {
									self.__scrollHandler(e);
								});
							
							self.__$originParents = self._$origin.parents();
							
							// scrolling may require the tooltip to be moved or even
							// repositioned in some cases
							self.__$originParents.each(function(i, parent) {
								
								$(parent).on('scroll.'+ self.__namespace +'-triggerClose', function(e) {
									self.__scrollHandler(e);
								});
							});
							
							if (	self.__options.triggerClose.mouseleave
								||	(self.__options.triggerClose.touchleave && env.hasTouchCapability)
							) {
								
								// we use an event to allow users/plugins to control when the mouseleave/touchleave
								// close triggers will come to action. It allows to have more triggering elements
								// than just the origin and the tooltip for example, or to cancel/delay the closing,
								// or to make the tooltip interactive even if it wasn't when it was open, etc.
								self._on('dismissable', function(event) {
									
									if (event.dismissable) {
										
										if (event.delay) {
											
											timeout = setTimeout(function() {
												// event.event may be undefined
												self._close(event.event);
											}, event.delay);
											
											self.__timeouts.close.push(timeout);
										}
										else {
											self._close(event);
										}
									}
									else {
										clearTimeout(timeout);
									}
								});
								
								// now set the listeners that will trigger 'dismissable' events
								var $elements = self._$origin,
									eventNamesIn = '',
									eventNamesOut = '',
									timeout = null;
								
								// if we have to allow interaction, bind on the tooltip too
								if (self.__options.interactive) {
									$elements = $elements.add(self._$tooltip);
								}
								
								if (self.__options.triggerClose.mouseleave) {
									eventNamesIn += 'mouseenter.'+ self.__namespace +'-triggerClose ';
									eventNamesOut += 'mouseleave.'+ self.__namespace +'-triggerClose ';
								}
								if (self.__options.triggerClose.touchleave && env.hasTouchCapability) {
									eventNamesIn += 'touchstart.'+ self.__namespace +'-triggerClose';
									eventNamesOut += 'touchend.'+ self.__namespace +'-triggerClose touchcancel.'+ self.__namespace +'-triggerClose';
								}
								
								$elements
									// close after some time spent outside of the elements
									.on(eventNamesOut, function(event) {
										
										// it's ok if the touch gesture ended up to be a swipe,
										// it's still a "touch leave" situation
										if (	self._touchIsTouchEvent(event)
											||	!self._touchIsEmulatedEvent(event)
										) {
											
											var delay = (event.type == 'mouseleave') ?
												self.__options.delay :
												self.__options.delayTouch;
											
											self._trigger({
												delay: delay[1],
												dismissable: true,
												event: event,
												type: 'dismissable'
											});
										}
									})
									// suspend the mouseleave timeout when the pointer comes back
									// over the elements
									.on(eventNamesIn, function(event) {
										
										// it's also ok if the touch event is a swipe gesture
										if (	self._touchIsTouchEvent(event)
											||	!self._touchIsEmulatedEvent(event)
										) {
											self._trigger({
												dismissable: false,
												event: event,
												type: 'dismissable'
											});
										}
									});
							}
							
							// close the tooltip when the origin gets a mouse click (common behavior of
							// native tooltips)
							if (self.__options.triggerClose.originClick) {
								
								self._$origin.on('click.'+ self.__namespace + '-triggerClose', function(event) {
									
									// we could actually let a tap trigger this but this feature just
									// does not make sense on touch devices
									if (	!self._touchIsTouchEvent(event)
										&&	!self._touchIsEmulatedEvent(event)
									) {
										self._close(event);
									}
								});
							}
							
							// set the same bindings for click and touch on the body to close the tooltip
							if (	self.__options.triggerClose.click
								||	(self.__options.triggerClose.tap && env.hasTouchCapability)
							) {
								
								// don't set right away since the click/tap event which triggered this method
								// (if it was a click/tap) is going to bubble up to the body, we don't want it
								// to close the tooltip immediately after it opened
								setTimeout(function() {
									
									if (self.__state != 'closed') {
										
										var eventNames = '';
										if (self.__options.triggerClose.click) {
											eventNames += 'click.'+ self.__namespace +'-triggerClose ';
										}
										if (self.__options.triggerClose.tap && env.hasTouchCapability) {
											eventNames += 'touchend.'+ self.__namespace +'-triggerClose';
										}
										
										$('body').on(eventNames, function(event) {
											
											if (self._touchIsMeaningfulEvent(event)) {
												
												self._touchRecordEvent(event);
												
												if (!self.__options.interactive || !$.contains(self._$tooltip[0], event.target)) {
													self._close(event);
												}
											}
										});
										
										// needed to detect and ignore swiping
										if (self.__options.triggerClose.tap && env.hasTouchCapability) {
											
											$('body').on('touchstart.'+ self.__namespace +'-triggerClose', function(event) {
												self._touchRecordEvent(event);
											});
										}
									}
								}, 0);
							}
							
							self._trigger('ready');
							
							// call our custom callback
							if (self.__options.functionReady) {
								self.__options.functionReady.call(self, self, {
									origin: self._$origin[0],
									tooltip: self._$tooltip[0]
								});
							}
						}
						
						// if we have a timer set, let the countdown begin
						if (self.__options.timer > 0) {
							
							var timeout = setTimeout(function() {
								self._close();
							}, self.__options.timer + extraTime);
							
							self.__timeouts.close.push(timeout);
						}
					}
				}
			}
		}
		
		return self;
	},
	
	/**
	 * When using the mouseenter/touchstart open triggers, this function will
	 * schedule the opening of the tooltip after the delay, if there is one
	 *
	 * @param event
	 * @returns {self}
	 * @protected
 	 */
	_openShortly: function(event) {
		
		var self = this,
			ok = true;
		
		if (self.__state != 'stable' && self.__state != 'appearing') {
			
			// if a timeout is not already running
			if (!self.__timeouts.open) {
				
				self._trigger({
					type: 'start',
					event: event,
					stop: function() {
						ok = false;
					}
				});
				
				if (ok) {
					
					var delay = (event.type.indexOf('touch') == 0) ?
						self.__options.delayTouch :
						self.__options.delay;
					
					if (delay[0]) {
						
						self.__timeouts.open = setTimeout(function() {
							
							self.__timeouts.open = null;
							
							// open only if the pointer (mouse or touch) is still over the origin.
							// The check on the "meaningful event" can only be made here, after some
							// time has passed (to know if the touch was a swipe or not)
							if (self.__pointerIsOverOrigin && self._touchIsMeaningfulEvent(event)) {
								
								// signal that we go on
								self._trigger('startend');
								
								self._open(event);
							}
							else {
								// signal that we cancel
								self._trigger('startcancel');
							}
						}, delay[0]);
					}
					else {
						// signal that we go on
						self._trigger('startend');
						
						self._open(event);
					}
				}
			}
		}
		
		return self;
	},
	
	/**
	 * Meant for plugins to get their options
	 * 
	 * @param {string} pluginName The name of the plugin that asks for its options
	 * @param {object} defaultOptions The default options of the plugin
	 * @returns {object} The options
	 * @protected
	 */
	_optionsExtract: function(pluginName, defaultOptions) {
		
		var self = this,
			options = $.extend(true, {}, defaultOptions);
		
		// if the plugin options were isolated in a property named after the
		// plugin, use them (prevents conflicts with other plugins)
		var pluginOptions = self.__options[pluginName];
		
		// if not, try to get them as regular options
		if (!pluginOptions){
			
			pluginOptions = {};
			
			$.each(defaultOptions, function(optionName, value) {
				
				var o = self.__options[optionName];
				
				if (o !== undefined) {
					pluginOptions[optionName] = o;
				}
			});
		}
		
		// let's merge the default options and the ones that were provided. We'd want
		// to do a deep copy but not let jQuery merge arrays, so we'll do a shallow
		// extend on two levels, that will be enough if options are not more than 1
		// level deep
		$.each(options, function(optionName, value) {
			
			if (pluginOptions[optionName] !== undefined) {
				
				if ((		typeof value == 'object'
						&&	!(value instanceof Array)
						&&	value != null
					)
					&&
					(		typeof pluginOptions[optionName] == 'object'
						&&	!(pluginOptions[optionName] instanceof Array)
						&&	pluginOptions[optionName] != null
					)
				) {
					$.extend(options[optionName], pluginOptions[optionName]);
				}
				else {
					options[optionName] = pluginOptions[optionName];
				}
			}
		});
		
		return options;
	},
	
	/**
	 * Used at instantiation of the plugin, or afterwards by plugins that activate themselves
	 * on existing instances
	 * 
	 * @param {object} pluginName
	 * @returns {self}
	 * @protected
	 */
	_plug: function(pluginName) {
		
		var plugin = $.tooltipster._plugin(pluginName);
		
		if (plugin) {
			
			// if there is a constructor for instances
			if (plugin.instance) {
				
				// proxy non-private methods on the instance to allow new instance methods
				$.tooltipster.__bridge(plugin.instance, this, plugin.name);
			}
		}
		else {
			throw new Error('The "'+ pluginName +'" plugin is not defined');
		}
		
		return this;
	},
	
	/**
	 * This will return true if the event is a mouse event which was
	 * emulated by the browser after a touch event. This allows us to
	 * really dissociate mouse and touch triggers.
	 * 
	 * There is a margin of error if a real mouse event is fired right
	 * after (within the delay shown below) a touch event on the same
	 * element, but hopefully it should not happen often.
	 * 
	 * @returns {boolean}
	 * @protected
	 */
	_touchIsEmulatedEvent: function(event) {
		
		var isEmulated = false,
			now = new Date().getTime();
		
		for (var i = this.__touchEvents.length - 1; i >= 0; i--) {
			
			var e = this.__touchEvents[i];
			
			// delay, in milliseconds. It's supposed to be 300ms in
			// most browsers (350ms on iOS) to allow a double tap but
			// can be less (check out FastClick for more info)
			if (now - e.time < 500) {
				
				if (e.target === event.target) {
					isEmulated = true;
				}
			}
			else {
				break;
			}
		}
		
		return isEmulated;
	},
	
	/**
	 * Returns false if the event was an emulated mouse event or
	 * a touch event involved in a swipe gesture.
	 * 
	 * @param {object} event
	 * @returns {boolean}
	 * @protected
	 */
	_touchIsMeaningfulEvent: function(event) {
		return (
				(this._touchIsTouchEvent(event) && !this._touchSwiped(event.target))
			||	(!this._touchIsTouchEvent(event) && !this._touchIsEmulatedEvent(event))
		);
	},
	
	/**
	 * Checks if an event is a touch event
	 * 
	 * @param {object} event
	 * @returns {boolean}
	 * @protected
	 */
	_touchIsTouchEvent: function(event){
		return event.type.indexOf('touch') == 0;
	},
	
	/**
	 * Store touch events for a while to detect swiping and emulated mouse events
	 * 
	 * @param {object} event
	 * @returns {self}
	 * @protected
	 */
	_touchRecordEvent: function(event) {
		
		if (this._touchIsTouchEvent(event)) {
			event.time = new Date().getTime();
			this.__touchEvents.push(event);
		}
		
		return this;
	},
	
	/**
	 * Returns true if a swipe happened after the last touchstart event fired on
	 * event.target.
	 * 
	 * We need to differentiate a swipe from a tap before we let the event open
	 * or close the tooltip. A swipe is when a touchmove (scroll) event happens
	 * on the body between the touchstart and the touchend events of an element.
	 * 
	 * @param {object} target The HTML element that may have triggered the swipe
	 * @returns {boolean}
	 * @protected
	 */
	_touchSwiped: function(target) {
		
		var swiped = false;
		
		for (var i = this.__touchEvents.length - 1; i >= 0; i--) {
			
			var e = this.__touchEvents[i];
			
			if (e.type == 'touchmove') {
				swiped = true;
				break;
			}
			else if (
				e.type == 'touchstart'
				&&	target === e.target
			) {
				break;
			}
		}
		
		return swiped;
	},
	
	/**
	 * Triggers an event on the instance emitters
	 * 
	 * @returns {self}
	 * @protected
	 */
	_trigger: function() {
		
		var args = Array.prototype.slice.apply(arguments);
		
		if (typeof args[0] == 'string') {
			args[0] = { type: args[0] };
		}
		
		// add properties to the event
		args[0].instance = this;
		args[0].origin = this._$origin ? this._$origin[0] : null;
		args[0].tooltip = this._$tooltip ? this._$tooltip[0] : null;
		
		// note: the order of emitters matters
		this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate, args);
		$.tooltipster._trigger.apply($.tooltipster, args);
		this.__$emitterPublic.trigger.apply(this.__$emitterPublic, args);
		
		return this;
	},
	
	/**
	 * Deactivate a plugin on this instance
	 * 
	 * @returns {self}
	 * @protected
	 */
	_unplug: function(pluginName) {
		
		var self = this;
		
		// if the plugin has been activated on this instance
		if (self[pluginName]) {
			
			var plugin = $.tooltipster._plugin(pluginName);
			
			// if there is a constructor for instances
			if (plugin.instance) {
				
				// unbridge
				$.each(plugin.instance, function(methodName, fn) {
					
					// if the method exists (privates methods do not) and comes indeed from
					// this plugin (may be missing or come from a conflicting plugin).
					if (	self[methodName]
						&&	self[methodName].bridged === self[pluginName]
					) {
						delete self[methodName];
					}
				});
			}
			
			// destroy the plugin
			if (self[pluginName].__destroy) {
				self[pluginName].__destroy();
			}
			
			// remove the reference to the plugin instance
			delete self[pluginName];
		}
		
		return self;
	},
	
	/**
	 * @see self::_close
	 * @returns {self}
	 * @public
	 */
	close: function(callback) {
		
		if (!this.__destroyed) {
			this._close(null, callback);
		}
		else {
			this.__destroyError();
		}
		
		return this;
	},
	
	/**
	 * Sets or gets the content of the tooltip
	 * 
	 * @returns {mixed|self}
	 * @public
	 */
	content: function(content) {
		
		var self = this;
		
		// getter method
		if (content === undefined) {
			return self.__Content;
		}
		// setter method
		else {
			
			if (!self.__destroyed) {
				
				// change the content
				self.__contentSet(content);
				
				if (self.__Content !== null) {
					
					// update the tooltip if it is open
					if (self.__state !== 'closed') {
						
						// reset the content in the tooltip
						self.__contentInsert();
						
						// reposition and resize the tooltip
						self.reposition();
						
						// if we want to play a little animation showing the content changed
						if (self.__options.updateAnimation) {
							
							if (env.hasTransitions) {
								
								// keep the reference in the local scope
								var animation = self.__options.updateAnimation;
								
								self._$tooltip.addClass('tooltipster-update-'+ animation);
								
								// remove the class after a while. The actual duration of the
								// update animation may be shorter, it's set in the CSS rules
								setTimeout(function() {
									
									if (self.__state != 'closed') {
										
										self._$tooltip.removeClass('tooltipster-update-'+ animation);
									}
								}, 1000);
							}
							else {
								self._$tooltip.fadeTo(200, 0.5, function() {
									if (self.__state != 'closed') {
										self._$tooltip.fadeTo(200, 1);
									}
								});
							}
						}
					}
				}
				else {
					self._close();
				}
			}
			else {
				self.__destroyError();
			}
			
			return self;
		}
	},
	
	/**
	 * Destroys the tooltip
	 * 
	 * @returns {self}
	 * @public
	 */
	destroy: function() {
		
		var self = this;
		
		if (!self.__destroyed) {
			
			if (!self.__destroying) {
				
				self.__destroying = true;
				
				self._close(null, function() {
					
					self._trigger('destroy');
					
					self.__destroying = false;
					self.__destroyed = true;
					
					self._$origin
						.removeData(self.__namespace)
						// remove the open trigger listeners
						.off('.'+ self.__namespace +'-triggerOpen');
					
					// remove the touch listener
					$('body').off('.' + self.__namespace +'-triggerOpen');
					
					var ns = self._$origin.data('tooltipster-ns');
					
					// if the origin has been removed from DOM, its data may
					// well have been destroyed in the process and there would
					// be nothing to clean up or restore
					if (ns) {
						
						// if there are no more tooltips on this element
						if (ns.length === 1) {
							
							// optional restoration of a title attribute
							var title = null;
							if (self.__options.restoration == 'previous') {
								title = self._$origin.data('tooltipster-initialTitle');
							}
							else if (self.__options.restoration == 'current') {
								
								// old school technique to stringify when outerHTML is not supported
								title = (typeof self.__Content == 'string') ?
									self.__Content :
									$('<div></div>').append(self.__Content).html();
							}
							
							if (title) {
								self._$origin.attr('title', title);
							}
							
							// final cleaning
							
							self._$origin.removeClass('tooltipstered');
							
							self._$origin
								.removeData('tooltipster-ns')
								.removeData('tooltipster-initialTitle');
						}
						else {
							// remove the instance namespace from the list of namespaces of
							// tooltips present on the element
							ns = $.grep(ns, function(el, i) {
								return el !== self.__namespace;
							});
							self._$origin.data('tooltipster-ns', ns);
						}
					}
					
					// last event
					self._trigger('destroyed');
					
					// unbind private and public event listeners
					self._off();
					self.off();
					
					// remove external references, just in case
					self.__Content = null;
					self.__$emitterPrivate = null;
					self.__$emitterPublic = null;
					self.__options.parent = null;
					self._$origin = null;
					self._$tooltip = null;
					
					// make sure the object is no longer referenced in there to prevent
					// memory leaks
					$.tooltipster.__instancesLatestArr = $.grep($.tooltipster.__instancesLatestArr, function(el, i) {
						return self !== el;
					});
					
					clearInterval(self.__garbageCollector);
				});
			}
		}
		else {
			self.__destroyError();
		}
		
		// we return the scope rather than true so that the call to
		// .tooltipster('destroy') actually returns the matched elements
		// and applies to all of them
		return self;
	},
	
	/**
	 * Disables the tooltip
	 * 
	 * @returns {self}
	 * @public
	 */
	disable: function() {
		
		if (!this.__destroyed) {
			
			// close first, in case the tooltip would not disappear on
			// its own (no close trigger)
			this._close();
			this.__enabled = false;
			
			return this;
		}
		else {
			this.__destroyError();
		}
		
		return this;
	},
	
	/**
	 * Returns the HTML element of the origin
	 *
	 * @returns {self}
	 * @public
	 */
	elementOrigin: function() {
		
		if (!this.__destroyed) {
			return this._$origin[0];
		}
		else {
			this.__destroyError();
		}
	},
	
	/**
	 * Returns the HTML element of the tooltip
	 *
	 * @returns {self}
	 * @public
	 */
	elementTooltip: function() {
		return this._$tooltip ? this._$tooltip[0] : null;
	},
	
	/**
	 * Enables the tooltip
	 * 
	 * @returns {self}
	 * @public
	 */
	enable: function() {
		this.__enabled = true;
		return this;
	},
	
	/**
	 * Alias, deprecated in 4.0.0
	 * 
	 * @param {function} callback
	 * @returns {self}
	 * @public
	 */
	hide: function(callback) {
		return this.close(callback);
	},
	
	/**
	 * Returns the instance
	 * 
	 * @returns {self}
	 * @public
	 */
	instance: function() {
		return this;
	},
	
	/**
	 * For public use only, not to be used by plugins (use ::_off() instead)
	 * 
	 * @returns {self}
	 * @public
	 */
	off: function() {
		
		if (!this.__destroyed) {
			this.__$emitterPublic.off.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments));
		}
		
		return this;
	},
	
	/**
	 * For public use only, not to be used by plugins (use ::_on() instead)
	 *
	 * @returns {self}
	 * @public
	 */
	on: function() {
		
		if (!this.__destroyed) {
			this.__$emitterPublic.on.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments));
		}
		else {
			this.__destroyError();
		}
		
		return this;
	},
	
	/**
	 * For public use only, not to be used by plugins
	 *
	 * @returns {self}
	 * @public
	 */
	one: function() {
		
		if (!this.__destroyed) {
			this.__$emitterPublic.one.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments));
		}
		else {
			this.__destroyError();
		}
		
		return this;
	},
	
	/**
	 * @see self::_open
	 * @returns {self}
	 * @public
	 */
	open: function(callback) {
		
		if (!this.__destroyed && !this.__destroying) {
			this._open(null, callback);
		}
		else {
			this.__destroyError();
		}
		
		return this;
	},
	
	/**
	 * Get or set options. For internal use and advanced users only.
	 * 
	 * @param {string} o Option name
	 * @param {mixed} val optional A new value for the option
	 * @return {mixed|self} If val is omitted, the value of the option
	 * is returned, otherwise the instance itself is returned
	 * @public
	 */ 
	option: function(o, val) {
		
		// getter
		if (val === undefined) {
			return this.__options[o];
		}
		// setter
		else {
			
			if (!this.__destroyed) {
				
				// change value
				this.__options[o] = val;
				
				// format
				this.__optionsFormat();
				
				// re-prepare the triggers if needed
				if ($.inArray(o, ['trigger', 'triggerClose', 'triggerOpen']) >= 0) {
					this.__prepareOrigin();
				}
				
				if (o === 'selfDestruction') {
					this.__prepareGC();
				}
			}
			else {
				this.__destroyError();
			}
			
			return this;
		}
	},
	
	/**
	 * This method is in charge of setting the position and size properties of the tooltip.
	 * All the hard work is delegated to the display plugin.
	 * Note: The tooltip may be detached from the DOM at the moment the method is called 
	 * but must be attached by the end of the method call.
	 * 
	 * @param {object} event For internal use only. Defined if an event such as
	 * window resizing triggered the repositioning
	 * @param {boolean} tooltipIsDetached For internal use only. Set this to true if you
	 * know that the tooltip not being in the DOM is not an issue (typically when the
	 * tooltip element has just been created but has not been added to the DOM yet).
	 * @returns {self}
	 * @public
	 */
	reposition: function(event, tooltipIsDetached) {
		
		var self = this;
		
		if (!self.__destroyed) {
			
			// if the tooltip is still open and the origin is still in the DOM
			if (self.__state != 'closed' && bodyContains(self._$origin)) {
				
				// if the tooltip has not been removed from DOM manually (or if it
				// has been detached on purpose)
				if (tooltipIsDetached || bodyContains(self._$tooltip)) {
					
					if (!tooltipIsDetached) {
						// detach in case the tooltip overflows the window and adds
						// scrollbars to it, so __geometry can be accurate
						self._$tooltip.detach();
					}
					
					// refresh the geometry object before passing it as a helper
					self.__Geometry = self.__geometry();
					
					// let a plugin fo the rest
					self._trigger({
						type: 'reposition',
						event: event,
						helper: {
							geo: self.__Geometry
						}
					});
				}
			}
		}
		else {
			self.__destroyError();
		}
		
		return self;
	},
	
	/**
	 * Alias, deprecated in 4.0.0
	 *
	 * @param callback
	 * @returns {self}
	 * @public
	 */
	show: function(callback) {
		return this.open(callback);
	},
	
	/**
	 * Returns some properties about the instance
	 * 
	 * @returns {object}
	 * @public
	 */
	status: function() {
		
		return {
			destroyed: this.__destroyed,
			destroying: this.__destroying,
			enabled: this.__enabled,
			open: this.__state !== 'closed',
			state: this.__state
		};
	},
	
	/**
	 * For public use only, not to be used by plugins
	 *
	 * @returns {self}
	 * @public
	 */
	triggerHandler: function() {
		
		if (!this.__destroyed) {
			this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments));
		}
		else {
			this.__destroyError();
		}
		
		return this;
	}
};

$.fn.tooltipster = function() {
	
	// for using in closures
	var args = Array.prototype.slice.apply(arguments),
		// common mistake: an HTML element can't be in several tooltips at the same time
		contentCloningWarning = 'You are using a single HTML element as content for several tooltips. You probably want to set the contentCloning option to TRUE.';
	
	// this happens with $(sel).tooltipster(...) when $(sel) does not match anything
	if (this.length === 0) {
		
		// still chainable
		return this;
	}
	// this happens when calling $(sel).tooltipster('methodName or options')
	// where $(sel) matches one or more elements
	else {
		
		// method calls
		if (typeof args[0] === 'string') {
			
			var v = '#*$~&';
			
			this.each(function() {
				
				// retrieve the namepaces of the tooltip(s) that exist on that element.
				// We will interact with the first tooltip only.
				var ns = $(this).data('tooltipster-ns'),
					// self represents the instance of the first tooltipster plugin
					// associated to the current HTML object of the loop
					self = ns ? $(this).data(ns[0]) : null;
				
				// if the current element holds a tooltipster instance
				if (self) {
					
					if (typeof self[args[0]] === 'function') {
						
						if (	this.length > 1
							&&	args[0] == 'content'
							&&	(	args[1] instanceof $
								|| (typeof args[1] == 'object' && args[1] != null && args[1].tagName)
							)
							&&	!self.__options.contentCloning
							&&	self.__options.debug
						) {
							console.log(contentCloningWarning);
						}
						
						// note : args[1] and args[2] may not be defined
						var resp = self[args[0]](args[1], args[2]);
					}
					else {
						throw new Error('Unknown method "'+ args[0] +'"');
					}
					
					// if the function returned anything other than the instance
					// itself (which implies chaining, except for the `instance` method)
					if (resp !== self || args[0] === 'instance') {
						
						v = resp;
						
						// return false to stop .each iteration on the first element
						// matched by the selector
						return false;
					}
				}
				else {
					throw new Error('You called Tooltipster\'s "'+ args[0] +'" method on an uninitialized element');
				}
			});
			
			return (v !== '#*$~&') ? v : this;
		}
		// first argument is undefined or an object: the tooltip is initializing
		else {
			
			// reset the array of last initialized objects
			$.tooltipster.__instancesLatestArr = [];
			
			// is there a defined value for the multiple option in the options object ?
			var	multipleIsSet = args[0] && args[0].multiple !== undefined,
				// if the multiple option is set to true, or if it's not defined but
				// set to true in the defaults
				multiple = (multipleIsSet && args[0].multiple) || (!multipleIsSet && defaults.multiple),
				// same for content
				contentIsSet = args[0] && args[0].content !== undefined,
				content = (contentIsSet && args[0].content) || (!contentIsSet && defaults.content),
				// same for contentCloning
				contentCloningIsSet = args[0] && args[0].contentCloning !== undefined,
				contentCloning =
						(contentCloningIsSet && args[0].contentCloning)
					||	(!contentCloningIsSet && defaults.contentCloning),
				// same for debug
				debugIsSet = args[0] && args[0].debug !== undefined,
				debug = (debugIsSet && args[0].debug) || (!debugIsSet && defaults.debug);
			
			if (	this.length > 1
				&&	(	content instanceof $
					|| (typeof content == 'object' && content != null && content.tagName)
				)
				&&	!contentCloning
				&&	debug
			) {
				console.log(contentCloningWarning);
			}
			
			// create a tooltipster instance for each element if it doesn't
			// already have one or if the multiple option is set, and attach the
			// object to it
			this.each(function() {
				
				var go = false,
					$this = $(this),
					ns = $this.data('tooltipster-ns'),
					obj = null;
				
				if (!ns) {
					go = true;
				}
				else if (multiple) {
					go = true;
				}
				else if (debug) {
					console.log('Tooltipster: one or more tooltips are already attached to the element below. Ignoring.');
					console.log(this);
				}
				
				if (go) {
					obj = new $.Tooltipster(this, args[0]);
					
					// save the reference of the new instance
					if (!ns) ns = [];
					ns.push(obj.__namespace);
					$this.data('tooltipster-ns', ns);
					
					// save the instance itself
					$this.data(obj.__namespace, obj);
					
					// call our constructor custom function.
					// we do this here and not in ::init() because we wanted
					// the object to be saved in $this.data before triggering
					// it
					if (obj.__options.functionInit) {
						obj.__options.functionInit.call(obj, obj, {
							origin: this
						});
					}
					
					// and now the event, for the plugins and core emitter
					obj._trigger('init');
				}
				
				$.tooltipster.__instancesLatestArr.push(obj);
			});
			
			return this;
		}
	}
};

// Utilities

/**
 * A class to check if a tooltip can fit in given dimensions
 * 
 * @param {object} $tooltip The jQuery wrapped tooltip element, or a clone of it
 */
function Ruler($tooltip) {
	
	// list of instance variables
	
	this.$container;
	this.constraints = null;
	this.__$tooltip;
	
	this.__init($tooltip);
}

Ruler.prototype = {
	
	/**
	 * Move the tooltip into an invisible div that does not allow overflow to make
	 * size tests. Note: the tooltip may or may not be attached to the DOM at the
	 * moment this method is called, it does not matter.
	 * 
	 * @param {object} $tooltip The object to test. May be just a clone of the
	 * actual tooltip.
	 * @private
	 */
	__init: function($tooltip) {
		
		this.__$tooltip = $tooltip;
		
		this.__$tooltip
			.css({
				// for some reason we have to specify top and left 0
				left: 0,
				// any overflow will be ignored while measuring
				overflow: 'hidden',
				// positions at (0,0) without the div using 100% of the available width
				position: 'absolute',
				top: 0
			})
			// overflow must be auto during the test. We re-set this in case
			// it were modified by the user
			.find('.tooltipster-content')
				.css('overflow', 'auto');
		
		this.$container = $('<div class="tooltipster-ruler"></div>')
			.append(this.__$tooltip)
			.appendTo('body');
	},
	
	/**
	 * Force the browser to redraw (re-render) the tooltip immediately. This is required
	 * when you changed some CSS properties and need to make something with it
	 * immediately, without waiting for the browser to redraw at the end of instructions.
	 *
	 * @see http://stackoverflow.com/questions/3485365/how-can-i-force-webkit-to-redraw-repaint-to-propagate-style-changes
	 * @private
	 */
	__forceRedraw: function() {
		
		// note: this would work but for Webkit only
		//this.__$tooltip.close();
		//this.__$tooltip[0].offsetHeight;
		//this.__$tooltip.open();
		
		// works in FF too
		var $p = this.__$tooltip.parent();
		this.__$tooltip.detach();
		this.__$tooltip.appendTo($p);
	},
	
	/**
	 * Set maximum dimensions for the tooltip. A call to ::measure afterwards
	 * will tell us if the content overflows or if it's ok
	 *
	 * @param {int} width
	 * @param {int} height
	 * @return {Ruler}
	 * @public
	 */
	constrain: function(width, height) {
		
		this.constraints = {
			width: width,
			height: height
		};
		
		this.__$tooltip.css({
			// we disable display:flex, otherwise the content would overflow without
			// creating horizontal scrolling (which we need to detect).
			display: 'block',
			// reset any previous height
			height: '',
			// we'll check if horizontal scrolling occurs
			overflow: 'auto',
			// we'll set the width and see what height is generated and if there
			// is horizontal overflow
			width: width
		});
		
		return this;
	},
	
	/**
	 * Reset the tooltip content overflow and remove the test container
	 * 
	 * @returns {Ruler}
	 * @public
	 */
	destroy: function() {
		
		// in case the element was not a clone
		this.__$tooltip
			.detach()
			.find('.tooltipster-content')
				.css({
					// reset to CSS value
					display: '',
					overflow: ''
				});
		
		this.$container.remove();
	},
	
	/**
	 * Removes any constraints
	 * 
	 * @returns {Ruler}
	 * @public
	 */
	free: function() {
		
		this.constraints = null;
		
		// reset to natural size
		this.__$tooltip.css({
			display: '',
			height: '',
			overflow: 'visible',
			width: ''
		});
		
		return this;
	},
	
	/**
	 * Returns the size of the tooltip. When constraints are applied, also returns
	 * whether the tooltip fits in the provided dimensions.
	 * The idea is to see if the new height is small enough and if the content does
	 * not overflow horizontally.
	 *
	 * @param {int} width
	 * @param {int} height
	 * @returns {object} An object with a bool `fits` property and a `size` property
	 * @public
	 */
	measure: function() {
		
		this.__forceRedraw();
		
		var tooltipBcr = this.__$tooltip[0].getBoundingClientRect(),
			result = { size: {
				// bcr.width/height are not defined in IE8- but in this
				// case, bcr.right/bottom will have the same value
				// except in iOS 8+ where tooltipBcr.bottom/right are wrong
				// after scrolling for reasons yet to be determined
				height: tooltipBcr.height || tooltipBcr.bottom,
				width: tooltipBcr.width || tooltipBcr.right
			}};
		
		if (this.constraints) {
			
			// note: we used to use offsetWidth instead of boundingRectClient but
			// it returned rounded values, causing issues with sub-pixel layouts.
			
			// note2: noticed that the bcrWidth of text content of a div was once
			// greater than the bcrWidth of its container by 1px, causing the final
			// tooltip box to be too small for its content. However, evaluating
			// their widths one against the other (below) surprisingly returned
			// equality. Happened only once in Chrome 48, was not able to reproduce
			// => just having fun with float position values...
			
			var $content = this.__$tooltip.find('.tooltipster-content'),
				height = this.__$tooltip.outerHeight(),
				contentBcr = $content[0].getBoundingClientRect(),
				fits = {
					height: height <= this.constraints.height,
					width: (
						// this condition accounts for min-width property that
						// may apply
						tooltipBcr.width <= this.constraints.width
							// the -1 is here because scrollWidth actually returns
							// a rounded value, and may be greater than bcr.width if
							// it was rounded up. This may cause an issue for contents
							// which actually really overflow  by 1px or so, but that
							// should be rare. Not sure how to solve this efficiently.
							// See http://blogs.msdn.com/b/ie/archive/2012/02/17/sub-pixel-rendering-and-the-css-object-model.aspx
						&&	contentBcr.width >= $content[0].scrollWidth - 1
					)
				};
			
			result.fits = fits.height && fits.width;
		}
		
		// old versions of IE get the width wrong for some reason and it causes
		// the text to be broken to a new line, so we round it up. If the width
		// is the width of the screen though, we can assume it is accurate.
		if (	env.IE
			&&	env.IE <= 11
			&&	result.size.width !== env.window.document.documentElement.clientWidth
		) {
			result.size.width = Math.ceil(result.size.width) + 1;
		}
		
		return result;
	}
};

// quick & dirty compare function, not bijective nor multidimensional
function areEqual(a,b) {
	var same = true;
	$.each(a, function(i, _) {
		if (b[i] === undefined || a[i] !== b[i]) {
			same = false;
			return false;
		}
	});
	return same;
}

/**
 * A fast function to check if an element is still in the DOM. It
 * tries to use an id as ids are indexed by the browser, or falls
 * back to jQuery's `contains` method. May fail if two elements
 * have the same id, but so be it
 *
 * @param {object} $obj A jQuery-wrapped HTML element
 * @return {boolean}
 */
function bodyContains($obj) {
	var id = $obj.attr('id'),
		el = id ? env.window.document.getElementById(id) : null;
	// must also check that the element with the id is the one we want
	return el ? el === $obj[0] : $.contains(env.window.document.body, $obj[0]);
}

// detect IE versions for dirty fixes
var uA = navigator.userAgent.toLowerCase();
if (uA.indexOf('msie') != -1) env.IE = parseInt(uA.split('msie')[1]);
else if (uA.toLowerCase().indexOf('trident') !== -1 && uA.indexOf(' rv:11') !== -1) env.IE = 11;
else if (uA.toLowerCase().indexOf('edge/') != -1) env.IE = parseInt(uA.toLowerCase().split('edge/')[1]);

// detecting support for CSS transitions
function transitionSupport() {
	
	// env.window is not defined yet when this is called
	if (!win) return false;
	
	var b = win.document.body || win.document.documentElement,
		s = b.style,
		p = 'transition',
		v = ['Moz', 'Webkit', 'Khtml', 'O', 'ms'];
	
	if (typeof s[p] == 'string') { return true; }
	
	p = p.charAt(0).toUpperCase() + p.substr(1);
	for (var i=0; i<v.length; i++) {
		if (typeof s[v[i] + p] == 'string') { return true; }
	}
	return false;
}

// we'll return jQuery for plugins not to have to declare it as a dependency,
// but it's done by a build task since it should be included only once at the
// end when we concatenate the core file with a plugin
// sideTip is Tooltipster's default plugin.
// This file will be UMDified by a build task.

var pluginName = 'tooltipster.sideTip';

$.tooltipster._plugin({
	name: pluginName,
	instance: {
		/**
		 * Defaults are provided as a function for an easy override by inheritance
		 *
		 * @return {object} An object with the defaults options
		 * @private
		 */
		__defaults: function() {
			
			return {
				// if the tooltip should display an arrow that points to the origin
				arrow: true,
				// the distance in pixels between the tooltip and the origin
				distance: 6,
				// allows to easily change the position of the tooltip
				functionPosition: null,
				maxWidth: null,
				// used to accomodate the arrow of tooltip if there is one.
				// First to make sure that the arrow target is not too close
				// to the edge of the tooltip, so the arrow does not overflow
				// the tooltip. Secondly when we reposition the tooltip to
				// make sure that it's positioned in such a way that the arrow is
				// still pointing at the target (and not a few pixels beyond it).
				// It should be equal to or greater than half the width of
				// the arrow (by width we mean the size of the side which touches
				// the side of the tooltip).
				minIntersection: 16,
				minWidth: 0,
				// deprecated in 4.0.0. Listed for _optionsExtract to pick it up
				position: null,
				side: 'top',
				// set to false to position the tooltip relatively to the document rather
				// than the window when we open it
				viewportAware: true
			};
		},
		
		/**
		 * Run once: at instantiation of the plugin
		 *
		 * @param {object} instance The tooltipster object that instantiated this plugin
		 * @private
		 */
		__init: function(instance) {
			
			var self = this;
			
			// list of instance variables
			
			self.__instance = instance;
			self.__namespace = 'tooltipster-sideTip-'+ Math.round(Math.random()*1000000);
			self.__previousState = 'closed';
			self.__options;
			
			// initial formatting
			self.__optionsFormat();
			
			self.__instance._on('state.'+ self.__namespace, function(event) {
				
				if (event.state == 'closed') {
					self.__close();
				}
				else if (event.state == 'appearing' && self.__previousState == 'closed') {
					self.__create();
				}
				
				self.__previousState = event.state;
			});
			
			// reformat every time the options are changed
			self.__instance._on('options.'+ self.__namespace, function() {
				self.__optionsFormat();
			});
			
			self.__instance._on('reposition.'+ self.__namespace, function(e) {
				self.__reposition(e.event, e.helper);
			});
		},
		
		/**
		 * Called when the tooltip has closed
		 * 
		 * @private
		 */
		__close: function() {
			
			// detach our content object first, so the next jQuery's remove()
			// call does not unbind its event handlers
			if (this.__instance.content() instanceof $) {
				this.__instance.content().detach();
			}
			
			// remove the tooltip from the DOM
			this.__instance._$tooltip.remove();
			this.__instance._$tooltip = null;
		},
		
		/**
		 * Creates the HTML element of the tooltip.
		 * 
		 * @private
		 */
		__create: function() {
			
			// note: we wrap with a .tooltipster-box div to be able to set a margin on it
			// (.tooltipster-base must not have one)
			var $html = $(
				'<div class="tooltipster-base tooltipster-sidetip">' +
					'<div class="tooltipster-box">' +
						'<div class="tooltipster-content"></div>' +
					'</div>' +
					'<div class="tooltipster-arrow">' +
						'<div class="tooltipster-arrow-uncropped">' +
							'<div class="tooltipster-arrow-border"></div>' +
							'<div class="tooltipster-arrow-background"></div>' +
						'</div>' +
					'</div>' +
				'</div>'
			);
			
			// hide arrow if asked
			if (!this.__options.arrow) {
				$html
					.find('.tooltipster-box')
						.css('margin', 0)
						.end()
					.find('.tooltipster-arrow')
						.hide();
			}
			
			// apply min/max width if asked
			if (this.__options.minWidth) {
				$html.css('min-width', this.__options.minWidth + 'px');
			}
			if (this.__options.maxWidth) {
				$html.css('max-width', this.__options.maxWidth + 'px');
			}
			
			this.__instance._$tooltip = $html;
			
			// tell the instance that the tooltip element has been created
			this.__instance._trigger('created');
		},
		
		/**
		 * Used when the plugin is to be unplugged
		 *
		 * @private
		 */
		__destroy: function() {
			this.__instance._off('.'+ self.__namespace);
		},
		
		/**
		 * (Re)compute this.__options from the options declared to the instance
		 *
		 * @private
		 */
		__optionsFormat: function() {
			
			var self = this;
			
			// get the options
			self.__options = self.__instance._optionsExtract(pluginName, self.__defaults());
			
			// for backward compatibility, deprecated in v4.0.0
			if (self.__options.position) {
				self.__options.side = self.__options.position;
			}
			
			// options formatting
			
			// format distance as a four-cell array if it ain't one yet and then make
			// it an object with top/bottom/left/right properties
			if (typeof self.__options.distance != 'object') {
				self.__options.distance = [self.__options.distance];
			}
			if (self.__options.distance.length < 4) {
				
				if (self.__options.distance[1] === undefined) self.__options.distance[1] = self.__options.distance[0];
				if (self.__options.distance[2] === undefined) self.__options.distance[2] = self.__options.distance[0];
				if (self.__options.distance[3] === undefined) self.__options.distance[3] = self.__options.distance[1];
				
				self.__options.distance = {
					top: self.__options.distance[0],
					right: self.__options.distance[1],
					bottom: self.__options.distance[2],
					left: self.__options.distance[3]
				};
			}
			
			// let's transform:
			// 'top' into ['top', 'bottom', 'right', 'left']
			// 'right' into ['right', 'left', 'top', 'bottom']
			// 'bottom' into ['bottom', 'top', 'right', 'left']
			// 'left' into ['left', 'right', 'top', 'bottom']
			if (typeof self.__options.side == 'string') {
				
				var opposites = {
					'top': 'bottom',
					'right': 'left',
					'bottom': 'top',
					'left': 'right'
				};
				
				self.__options.side = [self.__options.side, opposites[self.__options.side]];
				
				if (self.__options.side[0] == 'left' || self.__options.side[0] == 'right') {
					self.__options.side.push('top', 'bottom');
				}
				else {
					self.__options.side.push('right', 'left');
				}
			}
			
			// misc
			// disable the arrow in IE6 unless the arrow option was explicitly set to true
			if (	$.tooltipster._env.IE === 6
				&&	self.__options.arrow !== true
			) {
				self.__options.arrow = false;
			}
		},
		
		/**
		 * This method must compute and set the positioning properties of the
		 * tooltip (left, top, width, height, etc.). It must also make sure the
		 * tooltip is eventually appended to its parent (since the element may be
		 * detached from the DOM at the moment the method is called).
		 *
		 * We'll evaluate positioning scenarios to find which side can contain the
		 * tooltip in the best way. We'll consider things relatively to the window
		 * (unless the user asks not to), then to the document (if need be, or if the
		 * user explicitly requires the tests to run on the document). For each
		 * scenario, measures are taken, allowing us to know how well the tooltip
		 * is going to fit. After that, a sorting function will let us know what
		 * the best scenario is (we also allow the user to choose his favorite
		 * scenario by using an event).
		 * 
		 * @param {object} helper An object that contains variables that plugin
		 * creators may find useful (see below)
		 * @param {object} helper.geo An object with many layout properties
		 * about objects of interest (window, document, origin). This should help
		 * plugin users compute the optimal position of the tooltip
		 * @private
		 */
		__reposition: function(event, helper) {
			
			var self = this,
				finalResult,
				// to know where to put the tooltip, we need to know on which point
				// of the x or y axis we should center it. That coordinate is the target
				targets = self.__targetFind(helper),
				testResults = [];
			
			// make sure the tooltip is detached while we make tests on a clone
			self.__instance._$tooltip.detach();
			
			// we could actually provide the original element to the Ruler and
			// not a clone, but it just feels right to keep it out of the
			// machinery.
			var $clone = self.__instance._$tooltip.clone(),
				// start position tests session
				ruler = $.tooltipster._getRuler($clone),
				satisfied = false,
				animation = self.__instance.option('animation');
			
			// an animation class could contain properties that distort the size
			if (animation) {
				$clone.removeClass('tooltipster-'+ animation);
			}
			
			// start evaluating scenarios
			$.each(['window', 'document'], function(i, container) {
				
				var takeTest = null;
				
				// let the user decide to keep on testing or not
				self.__instance._trigger({
					container: container,
					helper: helper,
					satisfied: satisfied,
					takeTest: function(bool) {
						takeTest = bool;
					},
					results: testResults,
					type: 'positionTest'
				});
				
				if (	takeTest == true
					||	(	takeTest != false
						&&	satisfied == false
							// skip the window scenarios if asked. If they are reintegrated by
							// the callback of the positionTest event, they will have to be
							// excluded using the callback of positionTested
						&&	(container != 'window' || self.__options.viewportAware)
					)
				) {
					
					// for each allowed side
					for (var i=0; i < self.__options.side.length; i++) {
						
						var distance = {
								horizontal: 0,
								vertical: 0
							},
							side = self.__options.side[i];
						
						if (side == 'top' || side == 'bottom') {
							distance.vertical = self.__options.distance[side];
						}
						else {
							distance.horizontal = self.__options.distance[side];
						}
						
						// this may have an effect on the size of the tooltip if there are css
						// rules for the arrow or something else
						self.__sideChange($clone, side);
						
						$.each(['natural', 'constrained'], function(i, mode) {
							
							takeTest = null;
							
							// emit an event on the instance
							self.__instance._trigger({
								container: container,
								event: event,
								helper: helper,
								mode: mode,
								results: testResults,
								satisfied: satisfied,
								side: side,
								takeTest: function(bool) {
									takeTest = bool;
								},
								type: 'positionTest'
							});
							
							if (	takeTest == true
								||	(	takeTest != false
									&&	satisfied == false
								)
							) {
								
								var testResult = {
									container: container,
									// we let the distance as an object here, it can make things a little easier
									// during the user's calculations at positionTest/positionTested
									distance: distance,
									// whether the tooltip can fit in the size of the viewport (does not mean
									// that we'll be able to make it initially entirely visible, see 'whole')
									fits: null,
									mode: mode,
									outerSize: null,
									side: side,
									size: null,
									target: targets[side],
									// check if the origin has enough surface on screen for the tooltip to
									// aim at it without overflowing the viewport (this is due to the thickness
									// of the arrow represented by the minIntersection length).
									// If not, the tooltip will have to be partly or entirely off screen in
									// order to stay docked to the origin. This value will stay null when the
									// container is the document, as it is not relevant
									whole: null
								};
								
								// get the size of the tooltip with or without size constraints
								var rulerConfigured = (mode == 'natural') ?
										ruler.free() :
										ruler.constrain(
											helper.geo.available[container][side].width - distance.horizontal,
											helper.geo.available[container][side].height - distance.vertical
										),
									rulerResults = rulerConfigured.measure();
								
								testResult.size = rulerResults.size;
								testResult.outerSize = {
									height: rulerResults.size.height + distance.vertical,
									width: rulerResults.size.width + distance.horizontal
								};
								
								if (mode == 'natural') {
									
									if(		helper.geo.available[container][side].width >= testResult.outerSize.width
										&&	helper.geo.available[container][side].height >= testResult.outerSize.height
									) {
										testResult.fits = true;
									}
									else {
										testResult.fits = false;
									}
								}
								else {
									testResult.fits = rulerResults.fits;
								}
								
								if (container == 'window') {
									
									if (!testResult.fits) {
										testResult.whole = false;
									}
									else {
										if (side == 'top' || side == 'bottom') {
											
											testResult.whole = (
													helper.geo.origin.windowOffset.right >= self.__options.minIntersection
												&&	helper.geo.window.size.width - helper.geo.origin.windowOffset.left >= self.__options.minIntersection
											);
										}
										else {
											testResult.whole = (
													helper.geo.origin.windowOffset.bottom >= self.__options.minIntersection
												&&	helper.geo.window.size.height - helper.geo.origin.windowOffset.top >= self.__options.minIntersection
											);
										}
									}
								}
								
								testResults.push(testResult);
								
								// we don't need to compute more positions if we have one fully on screen
								if (testResult.whole) {
									satisfied = true;
								}
								else {
									// don't run the constrained test unless the natural width was greater
									// than the available width, otherwise it's pointless as we know it
									// wouldn't fit either
									if (	testResult.mode == 'natural'
										&&	(	testResult.fits
											||	testResult.size.width <= helper.geo.available[container][side].width
										)
									) {
										return false;
									}
								}
							}
						});
					}
				}
			});
			
			// the user may eliminate the unwanted scenarios from testResults, but he's
			// not supposed to alter them at this point. functionPosition and the
			// position event serve that purpose.
			self.__instance._trigger({
				edit: function(r) {
					testResults = r;
				},
				event: event,
				helper: helper,
				results: testResults,
				type: 'positionTested'
			});
			
			/**
			 * Sort the scenarios to find the favorite one.
			 * 
			 * The favorite scenario is when we can fully display the tooltip on screen,
			 * even if it means that the middle of the tooltip is no longer centered on
			 * the middle of the origin (when the origin is near the edge of the screen
			 * or even partly off screen). We want the tooltip on the preferred side,
			 * even if it means that we have to use a constrained size rather than a
			 * natural one (as long as it fits). When the origin is off screen at the top
			 * the tooltip will be positioned at the bottom (if allowed), if the origin
			 * is off screen on the right, it will be positioned on the left, etc.
			 * If there are no scenarios where the tooltip can fit on screen, or if the
			 * user does not want the tooltip to fit on screen (viewportAware == false),
			 * we fall back to the scenarios relative to the document.
			 * 
			 * When the tooltip is bigger than the viewport in either dimension, we stop
			 * looking at the window scenarios and consider the document scenarios only,
			 * with the same logic to find on which side it would fit best.
			 * 
			 * If the tooltip cannot fit the document on any side, we force it at the
			 * bottom, so at least the user can scroll to see it.
 			 */
			testResults.sort(function(a, b) {
				
				// best if it's whole (the tooltip fits and adapts to the viewport)
				if (a.whole && !b.whole) {
					return -1;
				}
				else if (!a.whole && b.whole) {
					return 1;
				}
				else if (a.whole && b.whole) {
					
					var ai = self.__options.side.indexOf(a.side),
						bi = self.__options.side.indexOf(b.side);
					
					// use the user's sides fallback array
					if (ai < bi) {
						return -1;
					}
					else if (ai > bi) {
						return 1;
					}
					else {
						// will be used if the user forced the tests to continue
						return a.mode == 'natural' ? -1 : 1;
					}
				}
				else {
					
					// better if it fits
					if (a.fits && !b.fits) {
						return -1;
					}
					else if (!a.fits && b.fits) {
						return 1;
					}
					else if (a.fits && b.fits) {
						
						var ai = self.__options.side.indexOf(a.side),
							bi = self.__options.side.indexOf(b.side);
						
						// use the user's sides fallback array
						if (ai < bi) {
							return -1;
						}
						else if (ai > bi) {
							return 1;
						}
						else {
							// will be used if the user forced the tests to continue
							return a.mode == 'natural' ? -1 : 1;
						}
					}
					else {
						
						// if everything failed, this will give a preference to the case where
						// the tooltip overflows the document at the bottom
						if (	a.container == 'document'
							&&	a.side == 'bottom'
							&&	a.mode == 'natural'
						) {
							return -1;
						}
						else {
							return 1;
						}
					}
				}
			});
			
			finalResult = testResults[0];
			
			
			// now let's find the coordinates of the tooltip relatively to the window
			finalResult.coord = {};
			
			switch (finalResult.side) {
				
				case 'left':
				case 'right':
					finalResult.coord.top = Math.floor(finalResult.target - finalResult.size.height / 2);
					break;
				
				case 'bottom':
				case 'top':
					finalResult.coord.left = Math.floor(finalResult.target - finalResult.size.width / 2);
					break;
			}
			
			switch (finalResult.side) {
				
				case 'left':
					finalResult.coord.left = helper.geo.origin.windowOffset.left - finalResult.outerSize.width;
					break;
				
				case 'right':
					finalResult.coord.left = helper.geo.origin.windowOffset.right + finalResult.distance.horizontal;
					break;
				
				case 'top':
					finalResult.coord.top = helper.geo.origin.windowOffset.top - finalResult.outerSize.height;
					break;
				
				case 'bottom':
					finalResult.coord.top = helper.geo.origin.windowOffset.bottom + finalResult.distance.vertical;
					break;
			}
			
			// if the tooltip can potentially be contained within the viewport dimensions
			// and that we are asked to make it fit on screen
			if (finalResult.container == 'window') {
				
				// if the tooltip overflows the viewport, we'll move it accordingly (then it will
				// not be centered on the middle of the origin anymore). We only move horizontally
				// for top and bottom tooltips and vice versa.
				if (finalResult.side == 'top' || finalResult.side == 'bottom') {
					
					// if there is an overflow on the left
					if (finalResult.coord.left < 0) {
						
						// prevent the overflow unless the origin itself gets off screen (minus the
						// margin needed to keep the arrow pointing at the target)
						if (helper.geo.origin.windowOffset.right - this.__options.minIntersection >= 0) {
							finalResult.coord.left = 0;
						}
						else {
							finalResult.coord.left = helper.geo.origin.windowOffset.right - this.__options.minIntersection - 1;
						}
					}
					// or an overflow on the right
					else if (finalResult.coord.left > helper.geo.window.size.width - finalResult.size.width) {
						
						if (helper.geo.origin.windowOffset.left + this.__options.minIntersection <= helper.geo.window.size.width) {
							finalResult.coord.left = helper.geo.window.size.width - finalResult.size.width;
						}
						else {
							finalResult.coord.left = helper.geo.origin.windowOffset.left + this.__options.minIntersection + 1 - finalResult.size.width;
						}
					}
				}
				else {
					
					// overflow at the top
					if (finalResult.coord.top < 0) {
						
						if (helper.geo.origin.windowOffset.bottom - this.__options.minIntersection >= 0) {
							finalResult.coord.top = 0;
						}
						else {
							finalResult.coord.top = helper.geo.origin.windowOffset.bottom - this.__options.minIntersection - 1;
						}
					}
					// or at the bottom
					else if (finalResult.coord.top > helper.geo.window.size.height - finalResult.size.height) {
						
						if (helper.geo.origin.windowOffset.top + this.__options.minIntersection <= helper.geo.window.size.height) {
							finalResult.coord.top = helper.geo.window.size.height - finalResult.size.height;
						}
						else {
							finalResult.coord.top = helper.geo.origin.windowOffset.top + this.__options.minIntersection + 1 - finalResult.size.height;
						}
					}
				}
			}
			else {
				
				// there might be overflow here too but it's easier to handle. If there has
				// to be an overflow, we'll make sure it's on the right side of the screen
				// (because the browser will extend the document size if there is an overflow
				// on the right, but not on the left). The sort function above has already
				// made sure that a bottom document overflow is preferred to a top overflow,
				// so we don't have to care about it.
				
				// if there is an overflow on the right
				if (finalResult.coord.left > helper.geo.window.size.width - finalResult.size.width) {
					
					// this may actually create on overflow on the left but we'll fix it in a sec
					finalResult.coord.left = helper.geo.window.size.width - finalResult.size.width;
				}
				
				// if there is an overflow on the left
				if (finalResult.coord.left < 0) {
					
					// don't care if it overflows the right after that, we made our best
					finalResult.coord.left = 0;
				}
			}
			
			
			// submit the positioning proposal to the user function which may choose to change
			// the side, size and/or the coordinates
			
			// first, set the rules that corresponds to the proposed side: it may change
			// the size of the tooltip, and the custom functionPosition may want to detect the
			// size of something before making a decision. So let's make things easier for the
			// implementor
			self.__sideChange($clone, finalResult.side);
			
			// add some variables to the helper
			helper.tooltipClone = $clone[0];
			helper.tooltipParent = self.__instance.option('parent').parent[0];
			// move informative values to the helper
			helper.mode = finalResult.mode;
			helper.whole = finalResult.whole;
			// add some variables to the helper for the functionPosition callback (these
			// will also be added to the event fired by self.__instance._trigger but that's
			// ok, we're just being consistent)
			helper.origin = self.__instance._$origin[0];
			helper.tooltip = self.__instance._$tooltip[0];
			
			// leave only the actionable values in there for functionPosition
			delete finalResult.container;
			delete finalResult.fits;
			delete finalResult.mode;
			delete finalResult.outerSize;
			delete finalResult.whole;
			
			// keep only the distance on the relevant side, for clarity
			finalResult.distance = finalResult.distance.horizontal || finalResult.distance.vertical;
			
			// beginners may not be comfortable with the concept of editing the object
			//  passed by reference, so we provide an edit function and pass a clone
			var finalResultClone = $.extend(true, {}, finalResult);
			
			// emit an event on the instance
			self.__instance._trigger({
				edit: function(result) {
					finalResult = result;
				},
				event: event,
				helper: helper,
				position: finalResultClone,
				type: 'position'
			});
			
			if (self.__options.functionPosition) {
				
				
				var result = self.__options.functionPosition.call(self, self.__instance, helper, finalResultClone);
				
				if (result) finalResult = result;
			}
			
			// end the positioning tests session (the user might have had a
			// use for it during the position event, now it's over)
			ruler.destroy();
			
			
			// compute the position of the target relatively to the tooltip root
			// element so we can place the arrow and make the needed adjustments
			var arrowCoord,
				maxVal;
			
			if (finalResult.side == 'top' || finalResult.side == 'bottom') {
				
				arrowCoord = {
					prop: 'left',
					val: finalResult.target - finalResult.coord.left
				};
				maxVal = finalResult.size.width - this.__options.minIntersection;
			}
			else {
				
				arrowCoord = {
					prop: 'top',
					val: finalResult.target - finalResult.coord.top
				};
				maxVal = finalResult.size.height - this.__options.minIntersection;
			}
			
			// cannot lie beyond the boundaries of the tooltip, minus the
			// arrow margin
			if (arrowCoord.val < this.__options.minIntersection) {
				arrowCoord.val = this.__options.minIntersection;
			}
			else if (arrowCoord.val > maxVal) {
				arrowCoord.val = maxVal;
			}
			
			var originParentOffset;
			
			// let's convert the window-relative coordinates into coordinates relative to the
			// future positioned parent that the tooltip will be appended to
			if (helper.geo.origin.fixedLineage) {
				
				// same as windowOffset when the position is fixed
				originParentOffset = helper.geo.origin.windowOffset;
			}
			else {
				
				// this assumes that the parent of the tooltip is located at
				// (0, 0) in the document, typically like when the parent is
				// <body>.
				// If we ever allow other types of parent, .tooltipster-ruler
				// will have to be appended to the parent to inherit css style
				// values that affect the display of the text and such.
				originParentOffset = {
					left: helper.geo.origin.windowOffset.left + helper.geo.window.scroll.left,
					top: helper.geo.origin.windowOffset.top + helper.geo.window.scroll.top
				};
			}
			
			finalResult.coord = {
				left: originParentOffset.left + (finalResult.coord.left - helper.geo.origin.windowOffset.left),
				top: originParentOffset.top + (finalResult.coord.top - helper.geo.origin.windowOffset.top)
			};
			
			// set position values on the original tooltip element
			
			self.__sideChange(self.__instance._$tooltip, finalResult.side);
			
			if (helper.geo.origin.fixedLineage) {
				self.__instance._$tooltip
					.css('position', 'fixed');
			}
			else {
				// CSS default
				self.__instance._$tooltip
					.css('position', '');
			}
			
			self.__instance._$tooltip
				.css({
					left: finalResult.coord.left,
					top: finalResult.coord.top,
					// we need to set a size even if the tooltip is in its natural size
					// because when the tooltip is positioned beyond the width of the body
					// (which is by default the width of the window; it will happen when
					// you scroll the window horizontally to get to the origin), its text
					// content will otherwise break lines at each word to keep up with the
					// body overflow strategy.
					height: finalResult.size.height,
					width: finalResult.size.width
				})
				.find('.tooltipster-arrow')
					.css({
						'left': '',
						'top': ''
					})
					.css(arrowCoord.prop, arrowCoord.val);
			
			// append the tooltip HTML element to its parent
			self.__instance._$tooltip.appendTo(self.__instance.option('parent'));
			
			self.__instance._trigger({
				type: 'repositioned',
				event: event,
				position: finalResult
			});
		},
		
		/**
		 * Make whatever modifications are needed when the side is changed. This has
		 * been made an independant method for easy inheritance in custom plugins based
		 * on this default plugin.
		 *
		 * @param {object} $obj
		 * @param {string} side
		 * @private
		 */
		__sideChange: function($obj, side) {
			
			$obj
				.removeClass('tooltipster-bottom')
				.removeClass('tooltipster-left')
				.removeClass('tooltipster-right')
				.removeClass('tooltipster-top')
				.addClass('tooltipster-'+ side);
		},
		
		/**
		 * Returns the target that the tooltip should aim at for a given side.
		 * The calculated value is a distance from the edge of the window
		 * (left edge for top/bottom sides, top edge for left/right side). The
		 * tooltip will be centered on that position and the arrow will be
		 * positioned there (as much as possible).
		 *
		 * @param {object} helper
		 * @return {integer}
		 * @private
		 */
		__targetFind: function(helper) {
			
			var target = {},
				rects = this.__instance._$origin[0].getClientRects();
			
			// these lines fix a Chrome bug (issue #491)
			if (rects.length > 1) {
				var opacity = this.__instance._$origin.css('opacity');
				if(opacity == 1) {
					this.__instance._$origin.css('opacity', 0.99);
					rects = this.__instance._$origin[0].getClientRects();
					this.__instance._$origin.css('opacity', 1);
				}
			}
			
			// by default, the target will be the middle of the origin
			if (rects.length < 2) {
				
				target.top = Math.floor(helper.geo.origin.windowOffset.left + (helper.geo.origin.size.width / 2));
				target.bottom = target.top;
				
				target.left = Math.floor(helper.geo.origin.windowOffset.top + (helper.geo.origin.size.height / 2));
				target.right = target.left;
			}
			// if multiple client rects exist, the element may be text split
			// up into multiple lines and the middle of the origin may not be
			// best option anymore. We need to choose the best target client rect
			else {
				
				// top: the first
				var targetRect = rects[0];
				target.top = Math.floor(targetRect.left + (targetRect.right - targetRect.left) / 2);
		
				// right: the middle line, rounded down in case there is an even
				// number of lines (looks more centered => check out the
				// demo with 4 split lines)
				if (rects.length > 2) {
					targetRect = rects[Math.ceil(rects.length / 2) - 1];
				}
				else {
					targetRect = rects[0];
				}
				target.right = Math.floor(targetRect.top + (targetRect.bottom - targetRect.top) / 2);
		
				// bottom: the last
				targetRect = rects[rects.length - 1];
				target.bottom = Math.floor(targetRect.left + (targetRect.right - targetRect.left) / 2);
		
				// left: the middle line, rounded up
				if (rects.length > 2) {
					targetRect = rects[Math.ceil((rects.length + 1) / 2) - 1];
				}
				else {
					targetRect = rects[rects.length - 1];
				}
				
				target.left = Math.floor(targetRect.top + (targetRect.bottom - targetRect.top) / 2);
			}
			
			return target;
		}
	}
});

/* a build task will add "return $;" here */
return $;

}));
// source --> https://www.crestdatasys.com/wp-content/plugins/smart-logo-showcase-lite/js/smls-frontend-script.js?ver=1.1.2 
function resize() {
    if (jQuery(window).width() <= 1024) {
        jQuery('.smls-main-logo-wrapper').addClass('smls-resposive-wrap');

    } else {
        jQuery('.smls-main-logo-wrapper').removeClass('smls-resposive-wrap');
    }
}
jQuery(document).ready(function($) {
    $(window).resize(resize);
    resize();


    /*
     *
     * check window width
     */
    var smlsWindowWidth = $(window).width();
    $(window).resize(function() {
        smlsWindowWidth = $(window).width();
    });
    /*
     * Add responsive class for grid column
     */
    if (smlsWindowWidth > 1024) {

        for (i = 2; i <= 4; i++) {
            if ($('.smls-grid').hasClass('smls-tablet-column-' + i + '')) {

                $('.smls-grid').removeClass('smls-tablet-column-' + i + '');
            }
        }
        for (i = 1; i <= 2; i++) {
            if ($('.smls-grid').hasClass('smls-mobile-column-' + i + '')) {

                $('.smls-grid').removeClass('smls-mobile-column-' + i + '');
            }
        }


    }
    if (smlsWindowWidth > 740 && smlsWindowWidth <= 1024) {
        for (i = 2; i <= 6; i++) {
            if ($('.smls-grid').hasClass('smls-grid-column-' + i + '')) {

                $('.smls-grid').removeClass('smls-grid-column-' + i + '');
            }
        }
        for (i = 1; i <= 2; i++) {
            if ($('.smls-grid').hasClass('smls-mobile-column-' + i + '')) {

                $('.smls-grid').removeClass('smls-mobile-column-' + i + '');
            }
        }
    }

    if (smlsWindowWidth <= 740) {
        for (i = 2; i <= 6; i++) {
            if ($('.smls-grid').hasClass('smls-grid-column-' + i + '')) {

                $('.smls-grid').removeClass('smls-grid-column-' + i + '');
            }
        }
        for (i = 2; i <= 4; i++) {
            if ($('.smls-grid').hasClass('smls-tablet-column-' + i + '')) {

                $('.smls-grid').removeClass('smls-tablet-column-' + i + '');
            }
        }

    }


    //for horizontal slide of logo
    var smls_carousel = {};
    $('.smls-carousel-logo').each(function() {
        var id = $(this).data('id');
        var pager = $(this).data('pager');
        var controls = $(this).data('controls');
        var controls_type = $(this).data('controls-type');
        var slide_count = $(this).data('slide-count');
        var auto = $(this).data('autoplay');
        var auto_speed = $(this).data('auto-speed');
        var template = $(this).data('template');
        var arrow_type = $(this).data('arrow-type');

        if (template == 'template-2') {
            var margin = 0;
        } else {
            var margin = 15;
        }
        if (controls_type == 'arrow') {
            if (arrow_type == 'type-5') {
                var nav_type = [
                    '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
                    '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
                ];
            } else {
                var nav_type = [
                    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
                ];
            }
        } else {
            var nav_type = ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>prev', 'next<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'];
        }

        smls_carousel.id = $(this).owlCarousel({
            center: false,
            items: 1,
            loop: true,
            margin: margin,
            nav: controls,
            dots: pager,
            dotsEach: true,
            navText: nav_type,
            autoplay: auto,
            autoplayHoverPause: true,
            autoplayTimeout: auto_speed,
            animateOut: 'slideOutUp',
            animateIn: 'slideInUp',
            responsiveClass: true,
            responsive: {
                768: {
                    items: slide_count
                },
                0: {
                    items: 1,
                    center: false,
                    nav: false,
                    dots: false

                },
                480: {
                    items: 1,
                    center: false,
                    nav: false,
                    dots: false

                },
                481: {
                    items: 2,
                    center: false,
                    nav: false,
                    dots: false

                },
                740: {
                    items: 2,
                    center: false,
                    nav: false,
                    dots: false

                }

            }


        });
    });



    /*
     * Tooltip
     */
    var smls_tool = {};
    $('.smls-tooltip').each(function() {
        var id = $(this).data('id');
        var tool_template = $(this).data('template');
        var tool_position = $(this).data('position');
        var animation = $(this).data('animation');
        var duration = $(this).data('duration');
        smls_tool.id = $(this).tooltipster({
            animation: 'animation',
            animationDuration: duration,
            position: tool_position, // display the tips to the right of the element
            theme: ['tooltipster-noir', 'smls-tooltip-' + tool_template + '']
        });
    });

});
// source --> https://www.crestdatasys.com/wp-content/plugins/stm-configurations/megamenu/assets/js/megamenu.js?ver=1.2 
var pearl_stretch_megamenu_child;

(function ($) {
    "use strict";

    $(document).ready(function () {
        pearl_stretch_megamenu_child();
    });

    $(window).load(function(){
        pearl_stretch_megamenu_child();
    });

    $(window).resize(function(){
        pearl_stretch_megamenu_child();
    });

    pearl_stretch_megamenu_child = function() {
        // Wide
        var $wide = $('.stm_megamenu__wide > ul.sub-menu');
        var windowW = $(document).width();

        if ($wide.length) {
            var $containerWide = $wide.closest('.stm-header__row');
            var containerWideW = $containerWide.width();

            // +15 due to global style left 15px
            var xPos = ((windowW - containerWideW) / 2 ) + 15;

            $wide.each(function () {

                $(this).css({
                    width: windowW + 'px',
                    'margin-left': '-' + xPos + 'px'
                })
            })
        }

        // Boxed
        var $boxed = $('.stm_megamenu__boxed > ul.sub-menu');
        if ($boxed.length) {
            var $container = $boxed.closest('.stm-header__row');
            var containerW = $container.width();


            $boxed.each(function () {
                $(this).css({
                    width: containerW + 'px',
                })
            })
        }


        /*GET BG*/
        var $mega_menu = $('.stm_megamenu');
        $mega_menu.each(function(){
            var bg = $(this).find('a[data-megabg]').attr('data-megabg');
            if(typeof bg !== 'undefined') {
                $(this).find(' > ul.sub-menu').css({
                    'background-image' : 'url("' + bg + '")'
                })
            }
        })
    }

})(jQuery);
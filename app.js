(function() {
    'use strict'

    angular.module('app', [])
        .component('postForm', {
            controller: function appController() {
                const vm = this

                vm.$onInit = function() {
                    vm.posts = [{
                        title: 'doctors hate him!',
                        body: 'What the flip did you just fliping say about me, you little flitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the flip out with precision the likes of which has never been seen before on this Earth, mark my fliping words. You think you can get away with saying that shiz to me over the Internet? Think again, fliper. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fliping dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shiz. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fliping tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shiz fury all over you and you will drown in it. You’re fliping dead, kiddo.',
                        author: 'buddybro',
                        imageUrl: 'https://www.pexels.com/photo/bottom-view-of-buildings-under-dark-sky-141707/'
                    }, {
                        title: "asdfasd",
                        body: 81,
                        author: 'chadbrochill',
                        imageUrl: 'https://www.pexels.com/photo/white-orange-and-black-octopus-on-white-sea-sand-during-daytime-169599/'
                    }]
                }

                vm.addPost = function addPost() {
                    vm.posts.push(vm.post);
                    delete vm.post
                }

                vm.removePost = function removeItem(e, item) {
                    e.preventDefault();
                    vm.items.splice(vm.items.indexOf(item), 1);
                }
            },
            templateUrl: './postForm.html'
        })


}());
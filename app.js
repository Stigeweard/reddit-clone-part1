(function() {
    'use strict'

    angular.module('app', [])
        .component('postForm', {
            controller: function () {
                const vm = this
                vm.toggle = true;
                vm.filter = '';
                vm.sortBy = '-voteRating';
                vm.$onInit = function() {
                    vm.posts = [{
                        title: 'doctors hate him!',
                        body: 'What the flip did you just fliping say about me, you little flitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the flip out with precision the likes of which has never been seen before on this Earth, mark my fliping words. You think you can get away with saying that shiz to me over the Internet? Think again, fliper. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fliping dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shiz. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fliping tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shiz fury all over you and you will drown in it. You’re fliping dead, kiddo.',
                        author: 'buddybro',
                        imageUrl: 'https://images.pexels.com/photos/141707/pexels-photo-141707.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
                        voteRating: 0,
                        date: Date.now()
                    }, {
                        title: "whats the difference between people from dubai and people from abu dabi?",
                        body: 'people in dubai dont watch the flintstones. people in ABU DABI DOOOO!!!!',
                        author: 'chadbrochill',
                        imageUrl: 'https://images.pexels.com/photos/169599/pexels-photo-169599.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
                        voteRating: 0,
                        date: Date.now()
                    }]
                }

                vm.addPost = function addPost() {
                    vm.post.date = Date.now();
                    vm.post.voteRating = 0;
                    vm.posts.push(vm.post);
                    delete vm.post
                    vm.toggle = true
                }

                vm.removePost = function removeItem(e, item) {
                    e.preventDefault();
                    vm.items.splice(vm.items.indexOf(item), 1);
                }

                vm.upVote = function upVote(e, post) {
                    e.preventDefault();
                    post.voteRating++;
                }

                vm.downVote = function downVote(e, post) {
                    e.preventDefault();
                    if (post.voteRating > 0) {
                        post.voteRating--;
                    }
                }

                vm.addComment = function addComment(e, post) {
                    if (!post.comments) {
                        post.comments = [];
                    }
                    post.comments.push(post.comment)
                    delete post.comment
                }
            },
            templateUrl: './postForm.html'
        })


}());

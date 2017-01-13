(function() {
    'use strict'

    angular.module('app', [])
        .component('postForm', {
            controller: function appController() {
                const vm = this
                vm.toggle = true;
                vm.filter = '';
                vm.sortBy = '-voteRating';
                vm.commentToggle = true;
                vm.$onInit = function() {
                    vm.posts = [{
                        title: 'Slipsum!',
                        body: "Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.",
                        author: 'buddybro',
                        imageUrl: 'https://images.pexels.com/photos/141707/pexels-photo-141707.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
                        voteRating: 0,
                        date: Date.now(),
                        commentToggle: false
                    }, {
                        title: "whats the difference between people from dubai and people from abu dabi?",
                        body: 'people in dubai dont watch the flintstones. people in ABU DABI DOOOO!!!!',
                        author: 'chadbrochill',
                        imageUrl: 'https://images.pexels.com/photos/169599/pexels-photo-169599.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
                        voteRating: 0,
                        date: Date.now(),
                        commentToggle: false
                    }]
                }

                vm.addPost = function addPost() {
                    vm.post.date = Date.now();
                    vm.post.voteRating = 0;
                    vm.posts.push(vm.post);
                    vm.post.commentToggle = true;
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
                    post.commentToggle = false;
                    post.comments.push(post.comment)
                    delete post.comment
                }
            },
            templateUrl: './postForm.html'
        })


}());

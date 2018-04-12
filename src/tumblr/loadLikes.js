let debounceTimer

const loadLikes = () => {
	clearTimeout(debounceTimer)
	debounceTimer = setTimeout(() => {
		const likeButtons = document.getElementsByClassName('like_button')
		const likeIds = Array.from(likeButtons).map(({ dataset }) => dataset.postId)
		window.Tumblr && window.Tumblr.LikeButton.get_status_by_post_ids(likeIds)
	}, 200)
}

export default loadLikes

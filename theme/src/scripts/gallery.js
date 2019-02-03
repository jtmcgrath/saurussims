export default function createGallery() {
	let images, current
	const galleryRoot = document.getElementById('gallery-root')

	const renderGallery = index => {
		const total = images.length
		const number = index + 1
		const src = images[index]
		const template = `
            <div class="gallery-wrapper">
                <button class="gallery-close"></button>
                <div class="gallery-content">
                    <img class="gallery-image" src="${src}" />
                    ${number > 1 ? '<button class="gallery-prev"></button>' : ''}
                    ${number < total ? '<button class="gallery-next"></button>' : ''}
                    <button class="gallery-close">X</button>
                    <button class="gallery-count">${number} of ${total}</div>
                </div>
            </div>
        `

		galleryRoot.innerHTML = template
	}

	document.addEventListener('click', e => {
		if (e.target.classList.contains('open-gallery')) {
			images = [].map.call(
				document.querySelectorAll(
					`[data-gallery="${e.target.dataset.gallery}"]`
				),
				node => node.dataset.image
			)
			current = images.indexOf(e.target.dataset.image)

			renderGallery(current)
		}

		if (e.target.classList.contains('gallery-prev')) {
			current--

			renderGallery(current)
		}

		if (e.target.classList.contains('gallery-next')) {
			current++

			renderGallery(current)
		}

		if (e.target.classList.contains('gallery-close')) {
            galleryRoot.innerHTML = ''
			current = undefined
			images = undefined
		}
	})
}

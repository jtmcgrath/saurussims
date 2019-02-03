export default function createPhotosets() {
	;[].forEach.call(document.getElementsByClassName('photoset'), photoset => {
		if (!photoset.classList.contains('processed')) {
			const layout = photoset.dataset.layout
			const children = [...photoset.children]

			layout.split('').reduce((count, quantity) => {
				const items = parseInt(quantity, 10)
				const node = document.createElement('div')

				for (let i = 0; i < items; i++) {
					node.appendChild(children[count + i])
				}

				node.classList.add('photoset-row')
				photoset.appendChild(node)

				return count + items
			}, 0)

			photoset.classList.add('processed')
		}
	})
}

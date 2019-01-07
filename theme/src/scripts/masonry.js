export default function createMasonry() {
	const grid = document.getElementById('grid')
	if (grid && imagesLoaded && Masonry) {
		imagesLoaded(grid, () => {
			const masonry = new Masonry('#grid')

			masonry.on('layoutComplete', () => {
				grid.classList.add('loaded')
			})

			setTimeout(() => {
				grid.classList.add('loaded'), 400
			})
		})
	}
}

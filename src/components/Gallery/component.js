import React from 'react'

import { Modal } from 'components'

const Gallery = ({ active, photos, setState, styles, ...props }) => {
	if (!(active || active === 0)) return null

	const previous = active > 0 && (
		<button
			className={styles.prev}
			onClick={() => setState({ active: active - 1 })}
		/>
	)

	const next = active < photos.length - 1 && (
		<button
			className={styles.next}
			onClick={() => setState({ active: active + 1 })}
		/>
	)

	return (
		<Modal>
			<div className={styles.root}>
				<button
					className={styles.shadow}
					onClick={() => setState({ active: null })}
				/>
				<div className={styles.content}>
					{previous}
					<img className={styles.image} alt="" src={photos[active].original} />
					{next}
					<div className={styles.close}>X</div>
					<div className={styles.count}>
						{active + 1} of {photos.length}
					</div>
				</div>
			</div>
		</Modal>
	)
}

export default Gallery

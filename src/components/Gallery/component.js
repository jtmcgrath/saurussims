import React from 'react'

import { Modal } from 'components'

const Gallery = ({ active, photos, setState, styles, ...props }) =>
	(active || active === 0) && (
		<Modal>
			<div className={styles.root}>
				<button
					className={styles.shadow}
					onClick={() => setState({ active: null })}
				/>
				<div className={styles.content}>
					{active > 0 && (
						<button
							className={styles.prev}
							onClick={() => setState({ active: active - 1 })}
						/>
					)}
					<img className={styles.image} src={photos[active].original} />
					{active < photos.length - 1 && (
						<button
							className={styles.next}
							onClick={() => setState({ active: active + 1 })}
						/>
					)}
					<div className={styles.close}>X</div>
					<div className={styles.count}>
						{active + 1} of {photos.length}
					</div>
				</div>
			</div>
		</Modal>
	)

export default Gallery

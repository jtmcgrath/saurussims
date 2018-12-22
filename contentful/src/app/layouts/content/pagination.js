const renderItem = (content, value, className = '') => `
    <li>
        <a ${
			value ? ` data-type="page" data-value="${value}"` : ''
		} class="pagination-item ${className}">
            ${content}
        </a>
    </li>
`

export default function renderPagination({ pagination: { pages, current } }) {
	return pages.length > 1
		? `
        <nav class="pagination-wapper">
            <ul class="pagination-list">
                ${current > 1 ? renderItem('Prev', current - 1) : ''}
                ${pages
					.map(page =>
						renderItem(
							page,
							page !== current && page,
							page === current ? 'pagination-item-active' : undefined
						)
					)
					.join('')}
                ${current < pages.length ? renderItem('Next', current + 1) : ''}
            </ul>
        </nav>
`
		: ''
}

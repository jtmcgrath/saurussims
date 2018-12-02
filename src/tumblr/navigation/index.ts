import { renderBlock, renderString } from '~/tumblr/helpers'

export const AskEnabled = renderBlock('AskEnabled')
export const CurrentPage = renderBlock('CurrentPage')
export const JumpPage = renderBlock('JumpPage')
export const NextPage = renderBlock('NextPage')
export const Pagination = renderBlock('Pagination')
export const PreviousPage = renderBlock('PreviousPage')
export const SubmissionsEnabled = renderBlock('SubmissionsEnabled')

export const AskLabel = renderString('AskLabel')
export const CurrentPageNumber = renderString(
	'CurrentPageNumber',
	() => '{CurrentPage}'
)
export const NextPageURL = renderString('NextPageURL', () => '{NextPage}')
export const PageNumber = renderString('PageNumber')
export const SubmitLabel = renderString('SubmitLabel')
export const TotalPages = renderString('TotalPages')
export const URL = renderString('URL')

export { default as JumpPagination } from './JumpPagination'

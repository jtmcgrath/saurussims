import { renderBlock, renderString } from '~/tumblr/helpers'

export const IfAskEnabled = renderBlock('AskEnabled')
export const IfCurrentPage = renderBlock('CurrentPage')
export const IfJumpPage = renderBlock('JumpPage')
export const IfNextPage = renderBlock('NextPage')
export const IfPagination = renderBlock('Pagination')
export const IfPreviousPage = renderBlock('PreviousPage')
export const IfSubmissionsEnabled = renderBlock('SubmissionsEnabled')

export const AskLabel = renderString('AskLabel')
export const CurrentPage = renderString('CurrentPage')
export const NextPageURL = renderString('NextPage')
export const PageNumber = renderString('PageNumber')
export const SubmitLabel = renderString('SubmitLabel')
export const TotalPages = renderString('TotalPages')
export const URL = renderString('URL')

export { default as JumpPagination } from './JumpPagination'

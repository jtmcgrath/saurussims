import { renderBlock, renderString } from '~/tumblr/helpers'

export const IfAlbum = renderBlock('Album')
export const IfAlbumArt = renderBlock('AlbumArt')
export const IfArtist = renderBlock('Artist')
export const IfAudioEnabled = renderBlock('AudioEnabled')
export const IfAudioPlayer = renderBlock('AudioPlayer')
export const IfCaption = renderBlock('Caption')
export const IfExternalAudio = renderBlock('ExternalAudio')
export const IfPlayCount = renderBlock('PlayCount')
export const IfTrackName = renderBlock('TrackName')

export const Album = renderString('Album')
export const AlbumArt = renderString('AlbumArtURL')
export const Artist = renderString('Artist')
export const AudioPlayer = renderString('AudioPlayer')
export const Caption = renderString('Caption')
export const ExternalAudioURL = renderString('ExternalAudioURL')
export const RawAudioURL = renderString('RawAudioURL')
export const TrackName = renderString('TrackName')

export { default as AudioEmbed } from './AudioEmbed'
export { default as PlayCount } from './PlayCount'

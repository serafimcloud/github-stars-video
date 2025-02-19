'use client'

import { useTheme } from '@/hooks/use-theme'
import {
  GitHubStarsComposition,
  animationDurationInSeconds,
  fps,
  height,
  width,
} from '@/video/composition'
import { Props, defaultProps } from '@/video/schema'
import useSize from '@react-hook/size'
import { Player } from '@remotion/player'
import { useRef } from 'react'

export function CompositionPlayer({
  inputProps,
}: {
  inputProps: Partial<Props>
}) {
  const isDark = useTheme()
  const divRef = useRef<HTMLDivElement>(null)
  const [divWidth, divHeight] = useSize(divRef)

  return (
    <div className="w-full h-full" ref={divRef}>
      {divWidth !== 0 && divHeight !== 0 && (
        <Player
          style={{ width: '100%', height: '100%' }}
          component={GitHubStarsComposition}
          compositionWidth={width}
          compositionHeight={height}
          fps={fps}
          durationInFrames={(animationDurationInSeconds + 1) * fps}
          inputProps={{ ...defaultProps, ...inputProps }}
          controls
          loop
          showVolumeControls={false}
          allowFullscreen={false}
          autoPlay
          className={isDark ? 'dark' : ''}
        />
      )}
    </div>
  )
}

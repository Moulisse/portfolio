import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
  content: ['./**/*.{vue,js,ts,md}'],
  theme: {
    extend: {
      colors: {
        primary: colors.red,
      },
    },
  },
}

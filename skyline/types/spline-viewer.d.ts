import 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          url: string;
          'loading-anim'?: boolean | 'true' | 'false';
          'loading-anim-type'?: string;
          'camera-controls'?: boolean | 'true' | 'false';
        },
        HTMLElement
      >;
    }
  }
}

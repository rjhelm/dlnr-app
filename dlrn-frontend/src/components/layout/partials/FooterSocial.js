import React from 'react';
import classNames from 'classnames';

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="https://www.linkedin.com/company/decentralized-learning">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 64 64">
              <title>Reddit</title>
              <circle cx="22.5" cy="36.4" r="4.3" fill="#6163ff"></circle>
              <path  d="M64 32.9a9.585 9.585 0 0 0-9.4-9.7 8.356 8.356 0 0 0-4.9 1.5 34.055 34.055 0 0 0-16.1-4.4l3.5-10.1 7.3 1.7c0 .2-.1.5-.1.7a7.376 7.376 0 1 0 1.1-3.8L35 6.3l-4.9 14a33.784 33.784 0 0 0-16 4.7c.1-.1.2-.1.2-.2a9.068 9.068 0 0 0-5.1-1.6c-5 0-9.2 4.4-9.2 9.7a9.5 9.5 0 0 0 4.7 8.3c1.1 10 13 17.8 27.5 17.8 14.6 0 26.5-8 27.5-18a9.638 9.638 0 0 0 4.3-8.1zM51.6 8.6a4 4 0 1 1-4 4 4.012 4.012 0 0 1 4-4zM9.4 26.5a7.789 7.789 0 0 1 2.1.4 17.149 17.149 0 0 0-6.7 10.3 6.452 6.452 0 0 1 4.6-10.7zm22.8 29.3c-13.4 0-24.4-7.2-24.4-16.2 0-8.9 10.9-16.2 24.4-16.2 13.4 0 24.3 7.2 24.3 16.2S45.6 55.8 32.2 55.8zm27.2-19a17.742 17.742 0 0 0-6.6-10 5.663 5.663 0 0 1 1.8-.3 6.257 6.257 0 0 1 6.1 6.4 5.44 5.44 0 0 1-1.3 3.9z"
                fill="#6163ff"></path>
              <circle cx="41" cy="36.4" r="4.3" fill="#6163ff"></circle>
              <path d="M40.3 46c-9.1 6-16.5.3-16.8.1a1.7 1.7 0 0 0-2.3.2 1.607 1.607 0 0 0 .2 2.3A17.783 17.783 0 0 0 31.8 52a18.23 18.23 0 0 0 10.3-3.3 1.623 1.623 0 1 0-1.8-2.7z"
                fill="#6163ff"></path>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/decentralized-learning">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" width="16" height="16">
              <title>Linkedin</title>
              <desc>A line styled icon from Orion Icon Library.</desc>
              <path fill="#6163FF" d="M3.078 22.331h12.188v36.844H3.078z" />
              <path d="M46.719 21.112c-5.344 0-8.531 1.969-11.906 6.281v-5.062H22.625v36.844h12.281V39.206c0-4.219 2.156-8.344 7.031-8.344s7.781 4.125 7.781 8.25v20.063H62V38.269c0-14.532-9.844-17.157-15.281-17.157z" fill="#6163FF" />
              <path d="M9.219 4.425C5.188 4.425 2 7.331 2 10.894s3.188 6.469 7.219 6.469 7.219-2.906 7.219-6.469-3.188-6.469-7.219-6.469z" fill="#6163FF" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/DLRN_blockchain">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
              <title>Twitter</title>
              <path
                d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/decentralizedlearning/">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
              <title>Instagram</title>
              <g>
                <circle cx="12.145" cy="3.892" r="1" />
                <path
                  d="M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                <path
                  d="M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z" />
              </g>
            </svg>
          </a>
        </li>
      </ul>
    </div >
  );
}

export default FooterSocial;
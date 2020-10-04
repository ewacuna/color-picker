import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './CopyBox.css';

export const CopyBox = ({ rgbColor }) => {
    const { red, green, blue } = rgbColor;
    const spanRef = useRef();

    // Convert RGB Color to HEX
    const rgbToHex = () => {
        let rgb = blue | (green << 8) | (red << 16);
        return '#' + (0x1000000 + rgb).toString(16).slice(1);
    };

    const isCopied = () => {
        const span = spanRef.current;
        const text = span.textContent;
        span.textContent = 'Copied!';

        setTimeout(() => {
            span.textContent = text;
        }, 1000);
    };

    return (
        <div className="base">
            <CopyToClipboard text={rgbToHex()} onCopy={isCopied}>
                <span tooltip="Click to copy" ref={spanRef}>
                    {rgbToHex()}
                </span>
            </CopyToClipboard>
        </div>
    );
};

CopyBox.propTypes = {
    rgbColor: PropTypes.object.isRequired,
};

CopyBox.defaultProps = {
    rgbColor: {
        red: 0,
        green: 0,
        blue: 0,
    },
};

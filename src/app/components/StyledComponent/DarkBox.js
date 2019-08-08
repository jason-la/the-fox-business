import React from "react";
import { PrimaryButton } from "../StyledComponent/style";

export default function DarkBox({
  title,
  grayText,
  content,
  btnContent,
  btnIcon,
  children
}) {
  return (
    <div className="dark-content">
      <div className="title">{title}</div>
      <div className="content">
        <p
          className="gray-text"
          dangerouslySetInnerHTML={{ __html: grayText }}
        />
        <p dangerouslySetInnerHTML={{ __html: content }} />
        {children}
        <PrimaryButton width={270} height={55}>
          <span className={btnIcon ? `icon ${btnIcon} mr-2` : ""} />
          <span dangerouslySetInnerHTML={{ __html: btnContent }} />
        </PrimaryButton>
      </div>
    </div>
  );
}

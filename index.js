var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// pnp:/Users/an-eungyeol/Documents/semicolon/SemicolonDesign_Frontend/packages/ui/src/index.ts
__export(exports, {
  Body1: () => Body1,
  Body2: () => Body2,
  Body3: () => Body3,
  Botton: () => Botton,
  Button: () => Button,
  ButtonElement: () => ButtonElement,
  Caption: () => Caption,
  Subtitle1: () => Subtitle1,
  Subtitle2: () => Subtitle2,
  Subtitle3: () => Subtitle3,
  Subtitle4: () => Subtitle4,
  SwitchButton: () => SwitchButton,
  Title1: () => Title1,
  Title2: () => Title2,
  Title3: () => Title3
});

// pnp:/Users/an-eungyeol/Documents/semicolon/SemicolonDesign_Frontend/packages/ui/src/components/Button/index.tsx
var import_react16 = __toModule(require("react"));
var import_styled2 = __toModule(require("@emotion/styled"));

// pnp:/Users/an-eungyeol/Documents/semicolon/SemicolonDesign_Frontend/packages/ui/src/components/typography/Title1.tsx
var import_react3 = __toModule(require("react"));

// pnp:/Users/an-eungyeol/Documents/semicolon/SemicolonDesign_Frontend/packages/ui/src/components/typography/BaseTypography/index.tsx
var import_react2 = __toModule(require("react"));
var import_styled = __toModule(require("@emotion/styled"));

// pnp:/Users/an-eungyeol/Documents/semicolon/SemicolonDesign_Frontend/packages/ui/src/components/typography/BaseTypography/textStyles.ts
var import_react = __toModule(require("@emotion/react"));
var title1 = import_react.css`
    font-size: 40px;
    line-height: 60px;
`;
var title2 = import_react.css`
    font-size: 36px;
    line-height: 54px;
`;
var title3 = import_react.css`
    font-size: 32px;
    line-height: 48px;
`;
var subtitle1 = import_react.css`
    font-size: 32px;
    line-height: 48px;
`;
var subtitle2 = import_react.css`
    font-size: 28px;
    line-height: 32px;
`;
var subtitle3 = import_react.css`
    font-size: 24px;  
    line-height: 36px;
`;
var subtitle4 = import_react.css`
    font-size: 20px;
    line-height: 28px;
`;
var body1 = import_react.css`
    font-size: 16px;
    line-height: 24px;
`;
var body2 = import_react.css`
    font-size: 14px;
    line-height: 20px;
`;
var body3 = import_react.css`
    font-size: 12px;
    line-height: 16px;
`;
var botton = import_react.css`
    font-size: 14px;
    line-height: 20px;
`;
var caption = import_react.css`
    font-size: 12px;
    line-height: 16px;
`;

// pnp:/Users/an-eungyeol/Documents/semicolon/SemicolonDesign_Frontend/packages/ui/src/components/typography/BaseTypography/index.tsx
var defaultElement = {
  Title1: "h1",
  Title2: "h2",
  Title3: "h3",
  Subtitle1: "h4",
  Subtitle2: "h5",
  Subtitle3: "h6",
  Subtitle4: "h6",
  Body1: "p",
  Body2: "p",
  Body3: "p",
  Caption: "div",
  Botton: "div"
};
var defaultWeight = {
  Title1: "bold",
  Title2: "bold",
  Title3: "bold",
  Subtitle1: "medium",
  Subtitle2: "medium",
  Subtitle3: "medium",
  Subtitle4: "medium",
  Body1: "regular",
  Body2: "regular",
  Body3: "regular",
  Caption: "regular",
  Botton: "regular"
};
var typographyList = {
  Title1: title1,
  Title2: title2,
  Title3: title3,
  Subtitle1: subtitle1,
  Subtitle2: subtitle2,
  Subtitle3: subtitle3,
  Subtitle4: subtitle4,
  Body1: body1,
  Body2: body2,
  Body3: body3,
  Caption: caption,
  Botton: botton
};
var TextElement = import_styled.default.div`
    margin: 0;
    color: ${({ theme, color }) => color ? theme.colors[color] : theme.colors.black};
    font-weight: ${({ fontWeight, md, theme }) => fontWeight ? theme.fonts.weight[fontWeight] : theme.fonts.weight[defaultWeight[md]]};
    ${(props) => props.textAlign && `text-align: ${props.textAlign}`};
    ${(props) => typographyList[props.md]};
`;
var BaseTypography = (props) => {
  const { children, md, ...restProps } = props;
  const element = defaultElement[md];
  return /* @__PURE__ */ import_react2.default.createElement(TextElement, {
    md,
    as: element,
    ...restProps
  }, children);
};

// pnp:/Users/an-eungyeol/Documents/semicolon/SemicolonDesign_Frontend/packages/ui/src/components/typography/Title1.tsx
var Title1 = (props) => {
  const { children, ...restProps } = props;
  return /* @__PURE__ */ import_react3.default.createElement(BaseTypography, {
    md: "Title1",
    ...restProps
  }, children);
};

// pnp:/Users/an-eungyeol/Documents/semicolon/SemicolonDesign_Frontend/packages/ui/src/components/typography/Title2.tsx
var import_react4 = __toModule(require("react"));
var Title2 = (props) => {
  const { children, ...restProps } = props;
  return /* @__PURE__ */ import_react4.default.createElement(BaseTypography, {
    md: "Title2",
    ...restProps
  }, children);
};

// pnp:/Users/an-eungyeol/Documents/semicolon/SemicolonDesign_Frontend/packages/ui/src/components/typography/Title3.tsx
var import_react5 = __toModule(require("react"));
var Title3 = (props) => {
  const { children, ...restProps } = props;
  return /* @__PURE__ */ import_react5.default.createElement(BaseTypography, {
    md: "Title3",
    ...restProps
  }, children);
};

// pnp:/Users/an-eungyeol/Documents/semicolon/SemicolonDesign_Frontend/packages/ui/src/components/typography/Subtitle1.tsx
var import_react6 = __toModule(require("react"));
var Subtitle1 = (props) => {
  const { children, ...restProps } = props;
  return /* @__PURE__ */ import_react6.default.createElement(BaseTypography, {
    md: "Subtitle1",
    ...restProps
  }, children);
};

// pnp:/Users/an-eungyeol/Documents/semicolon/SemicolonDesign_Frontend/packages/ui/src/components/typography/Subtitle2.tsx
var import_react7 = __toModule(require("react"));
var Subtitle2 = (props) => {
  const { children, ...restProps } = props;
  return /* @__PURE__ */ import_react7.default.createElement(BaseTypography, {
    md: "Subtitle2",
    ...restProps
  }, children);
};

// pnp:/Users/an-eungyeol/Documents/semicolon/SemicolonDesign_Frontend/packages/ui/src/components/typography/Subtitle3.tsx
var import_react8 = __toModule(require("react"));
var Subtitle3 = (props) => {
  const { children, ...restProps } = props;
  return /* @__PURE__ */ import_react8.default.createElement(BaseTypography, {
    md: "Subtitle3",
    ...restProps
  }, children);
};

// pnp:/Users/an-eungyeol/Documents/semicolon/SemicolonDesign_Frontend/packages/ui/src/components/typography/Subtitle4.tsx
var import_react9 = __toModule(require("react"));
var Subtitle4 = (props) => {
  const { children, ...restProps } = props;
  return /* @__PURE__ */ import_react9.default.createElement(BaseTypography, {
    md: "Subtitle4",
    ...restProps
  }, children);
};

// pnp:/Users/an-eungyeol/Documents/semicolon/SemicolonDesign_Frontend/packages/ui/src/components/typography/Body1.tsx
var import_react10 = __toModule(require("react"));
var Body1 = (props) => {
  const { children, ...restProps } = props;
  return /* @__PURE__ */ import_react10.default.createElement(BaseTypography, {
    md: "Body1",
    ...restProps
  }, children);
};

// pnp:/Users/an-eungyeol/Documents/semicolon/SemicolonDesign_Frontend/packages/ui/src/components/typography/Body2.tsx
var import_react11 = __toModule(require("react"));
var Body2 = (props) => {
  const { children, ...restProps } = props;
  return /* @__PURE__ */ import_react11.default.createElement(BaseTypography, {
    md: "Body2",
    ...restProps
  }, children);
};

// pnp:/Users/an-eungyeol/Documents/semicolon/SemicolonDesign_Frontend/packages/ui/src/components/typography/Body3.tsx
var import_react12 = __toModule(require("react"));
var Body3 = (props) => {
  const { children, ...restProps } = props;
  return /* @__PURE__ */ import_react12.default.createElement(BaseTypography, {
    md: "Body3",
    ...restProps
  }, children);
};

// pnp:/Users/an-eungyeol/Documents/semicolon/SemicolonDesign_Frontend/packages/ui/src/components/typography/Botton.tsx
var import_react13 = __toModule(require("react"));
var Botton = (props) => {
  const { children, ...restProps } = props;
  return /* @__PURE__ */ import_react13.default.createElement(BaseTypography, {
    md: "Botton",
    ...restProps
  }, children);
};

// pnp:/Users/an-eungyeol/Documents/semicolon/SemicolonDesign_Frontend/packages/ui/src/components/typography/Caption.tsx
var import_react14 = __toModule(require("react"));
var Caption = (props) => {
  const { children, ...restProps } = props;
  return /* @__PURE__ */ import_react14.default.createElement(BaseTypography, {
    md: "Caption",
    ...restProps
  }, children);
};

// pnp:/Users/an-eungyeol/Documents/semicolon/SemicolonDesign_Frontend/packages/ui/src/components/Button/types.ts
var Colors = {
  default: "gray100",
  purple: "purple400",
  purpleLight: "purple50",
  border: "white",
  borderColor: "gray100",
  link: "white",
  bnDefault: "white",
  bnPurple: "white"
};
var ActiveColors = {
  default: "gray300",
  purple: "purple500",
  purpleLight: "purple100",
  border: "gray100",
  link: "white",
  bnDefault: "gray50",
  bnPurple: "purple50"
};
var FontColors = {
  default: "gray700",
  purple: "white",
  purpleLight: "purple400",
  border: "gray700",
  link: "blue400",
  full: "gray700",
  bnDefault: "gray700",
  bnPurple: "purple400"
};
var DisabledColors = {
  default: "gray50",
  purple: "purple50",
  purpleLight: "gray50",
  border: "gray50",
  link: "gray50",
  bnDefault: "gray50",
  bnPurple: "gray50"
};
var DisabledFontColors = {
  default: "gray300",
  purple: "white",
  purpleLight: "gray300",
  border: "gray300",
  link: "gray300",
  bnDefault: "gray300",
  bnPurple: "gray300"
};

// pnp:/Users/an-eungyeol/Documents/semicolon/SemicolonDesign_Frontend/packages/ui/src/components/Button/utils.ts
function colorObjectToColorString(color, addedBn) {
  if (typeof color === "string")
    return color || "default";
  else if (typeof color === "undefined")
    return "default";
  else if (addedBn && color.background === false) {
    switch (color.fillStyle) {
      case "default":
        return firstCharToTypeMessage(color.fillStyle);
      case "purple":
        return firstCharToTypeMessage(color.fillStyle);
      default:
        return color.fillStyle || "default";
    }
  } else
    return color.fillStyle || "default";
}
function firstCharToTypeMessage(message) {
  return "bn" + message.charAt(0).toUpperCase() + message.slice(1);
}
function isBackgroundNone(color) {
  if (color.indexOf("bn") !== -1)
    return true;
  else
    return false;
}
function fillStyleToColorString(fillStyle, colroState) {
  switch (colroState) {
    case "default":
      return Colors[fillStyle];
    case "active":
      return ActiveColors[fillStyle];
    case "font":
      return FontColors[fillStyle];
    case "diabled":
      return DisabledColors[fillStyle];
    case "disabledFont":
      return DisabledFontColors[fillStyle];
  }
}

// pnp:/Users/an-eungyeol/Documents/semicolon/SemicolonDesign_Frontend/packages/ui/src/components/Button/styles.ts
var import_react15 = __toModule(require("@emotion/react"));
var full = () => import_react15.css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0;
`;
var link = (props) => import_react15.css`
    &:hover, &:active {
        text-decoration: underline 1px solid ${props.theme.colors[props.color]};
    }   
`;

// pnp:/Users/an-eungyeol/Documents/semicolon/SemicolonDesign_Frontend/packages/ui/src/components/Button/index.tsx
var Cursor;
(function(Cursor2) {
  Cursor2["DISABLED"] = "not-allowed";
  Cursor2["LOADING"] = "progress";
  Cursor2["DEFAULT"] = "pointer";
})(Cursor || (Cursor = {}));
var PaddingVertical;
(function(PaddingVertical2) {
  PaddingVertical2[PaddingVertical2["lg"] = 16] = "lg";
  PaddingVertical2[PaddingVertical2["md"] = 16] = "md";
  PaddingVertical2[PaddingVertical2["sm"] = 8] = "sm";
})(PaddingVertical || (PaddingVertical = {}));
var PaddingHorizontal;
(function(PaddingHorizontal2) {
  PaddingHorizontal2[PaddingHorizontal2["lg"] = 150] = "lg";
  PaddingHorizontal2[PaddingHorizontal2["md"] = 68] = "md";
  PaddingHorizontal2[PaddingHorizontal2["sm"] = 16] = "sm";
})(PaddingHorizontal || (PaddingHorizontal = {}));
var BorderRadius;
(function(BorderRadius2) {
  BorderRadius2[BorderRadius2["lg"] = 12] = "lg";
  BorderRadius2[BorderRadius2["md"] = 12] = "md";
  BorderRadius2[BorderRadius2["sm"] = 4] = "sm";
})(BorderRadius || (BorderRadius = {}));
var ButtonElement = import_styled2.default.button`
    display: flex;
    align-items: center;
    border: none;
    cursor: ${(props) => props.cursor};
    background: ${(props) => props.theme.colors[props.background]};
    padding: ${(props) => `${props.paddingVertical}px ${props.paddingHorizontal}px`};
    border-radius: ${(props) => props.borderRadius}px;
    border: 1px solid ${(props) => props.theme.colors[props.borderColor]};

    ${(props) => props.isFull && full()}

    ${(props) => props.fillStyle === "link" && link(props)}

    &:hover, &:active {
        background: ${(props) => props.theme.colors[props.activeBackground]};
    }

    & .semicolon-button-typography {
        margin-left: ${(props) => props.marginLeft}px;
        margin-right: ${(props) => props.marginRight}px;
    }
`;
var Button = ({
  children,
  size = "md",
  fill = "default",
  background = true,
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  onClick,
  className,
  ...props
}) => {
  const cursorType = disabled ? "DISABLED" : loading ? "LOADING" : "DEFAULT";
  const colorString = colorObjectToColorString(fill, true);
  const BackgroundColor = disabled ? fillStyleToColorString(colorString, "diabled") : fillStyleToColorString(colorString, "default");
  const BackgroundActiveColor = disabled ? fillStyleToColorString(colorString, "diabled") : fillStyleToColorString(colorString, "active");
  const FontColor = disabled ? fillStyleToColorString(colorString, "disabledFont") : fillStyleToColorString(colorString, "font");
  const styledProps = {
    cursor: Cursor[cursorType],
    background: BackgroundColor,
    activeBackground: loading && isBackgroundNone(colorString) ? BackgroundColor : BackgroundActiveColor,
    paddingVertical: PaddingVertical[size],
    paddingHorizontal: PaddingHorizontal[size],
    borderRadius: BorderRadius[size],
    borderColor: colorString === "border" ? Colors["borderColor"] : BackgroundColor,
    size,
    fillStyle: colorString,
    color: FontColor,
    isFull: typeof fill !== "string" && fill?.full === true,
    marginLeft: leftIcon ? 6 : 0,
    marginRight: loading || rightIcon ? 6 : 0
  };
  return /* @__PURE__ */ import_react16.default.createElement(ButtonElement, {
    ...disabled,
    ...className,
    ...onClick,
    ...styledProps
  }, leftIcon, /* @__PURE__ */ import_react16.default.createElement(Botton, {
    className: "semicolon-button-typography",
    color: FontColor
  }, children), rightIcon);
};

// pnp:/Users/an-eungyeol/Documents/semicolon/SemicolonDesign_Frontend/packages/ui/src/components/SwitchButton.tsx
var import_react17 = __toModule(require("react"));
var import_styled3 = __toModule(require("@emotion/styled"));
var Position;
(function(Position2) {
  Position2[Position2["false"] = 1] = "false";
  Position2[Position2["true"] = 22] = "true";
})(Position || (Position = {}));
var Background;
(function(Background2) {
  Background2["false"] = "gray100";
  Background2["true"] = "purple400";
})(Background || (Background = {}));
var ButtonWrapperElement = import_styled3.default.div`
    width: 40px;
    height: 20px;
    border-radius: 11px;
    padding: 1px;
    cursor: pointer;
    position: relative;
    background: ${(props) => props.theme.colors[props.background]};
    transition: background 0.1s linear;
`;
var ButtonCircle = import_styled3.default.div`
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
    background: white;
    top: 50%;
    left: 0;
    transform: translate(${(props) => props.position}px, -50%);
    transition: transform 0.08s ease-in;
`;
var SwitchButton = ({ value = false, onToggle }) => {
  const [isActive, setIsActive] = (0, import_react17.useState)(value);
  const onClick = () => {
    setIsActive((prevState) => !prevState);
  };
  (0, import_react17.useEffect)(() => {
    if (onToggle)
      onToggle(isActive);
  }, [isActive]);
  const styledProps = {
    background: Background[isActive ? "true" : "false"],
    position: Position[isActive ? "true" : "false"]
  };
  return /* @__PURE__ */ import_react17.default.createElement(ButtonWrapperElement, {
    onClick,
    background: styledProps.background
  }, /* @__PURE__ */ import_react17.default.createElement(ButtonCircle, {
    position: styledProps.position
  }));
};
//# sourceMappingURL=index.js.map

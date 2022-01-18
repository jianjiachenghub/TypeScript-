interface SearchFunc {
  (source: string, subString: string): boolean; // 输入：输出  与数组类似[index: number]: number;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1;
};

// 重载定义
interface FetchInstance {
  (config: {}): {};
  (url: string, config: {}): {};
}
function fetch(config: {}): {};
function fetch(url: string, config: {}): {};
function fetch(url: string | {}, config?: {}): {} {
  return {};
}
const fetchIns: FetchInstance = fetch;



// 函数+属性定义 hooks组件
type FC<P = {}> = FunctionComponent<P>;
type PropsWithChildren<P> = P & { children?: ReactNode };
interface FunctionComponent<P = {}> {
  (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  propTypes?: WeakValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<P>;
  displayName?: string;
}

export const Button: FC<ButtonProps> = (props) => {};

Button.defaultProps = {
  disabled: false,
  btnType: "default",
};

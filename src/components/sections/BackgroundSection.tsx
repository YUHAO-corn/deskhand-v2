import type { CSSProperties } from "react";
import type { BackgroundSectionContent } from "../../types/content";
import { SectionCanvas } from "../primitives/SectionCanvas";
import styles from "./BackgroundSection.module.css";

interface BackgroundSectionProps {
  section: BackgroundSectionContent;
  index: number;
}

type MindMapBranch = {
  label: string;
  items: string[];
  y: number;
  labelWidth: number;
  highlight?: boolean;
  childX?: number;
};

const ROOT_X = 176;
const ROOT_Y = 310;
const BRANCH_LABEL_X = 262;
const CHILD_FORK_X = 584;

const MINDMAP_BRANCHES: MindMapBranch[] = [
  {
    label: "Generative UI",
    items: ["Playground", "This or That", "Guided Form"],
    y: 84,
    labelWidth: 118,
    highlight: true,
  },
  {
    label: "对话与会话",
    items: ["多会话管理", "会话持久化", "流式输出"],
    y: 130,
    labelWidth: 92,
  },
  {
    label: "Agent 引擎",
    items: ["Claude Agent SDK", "工具调用", "事件流"],
    y: 176,
    labelWidth: 90,
  },
  {
    label: "工具过程可视化",
    items: ["活动树", "状态追踪", "子代理嵌套"],
    y: 222,
    labelWidth: 126,
  },
  {
    label: "Skill 系统",
    items: ["内置 Skills", "Skill Insight", "一键安装 / 自定义创建"],
    y: 272,
    labelWidth: 82,
    highlight: true,
    childX: 566,
  },
  {
    label: "Artifact 面板",
    items: ["代码预览", "HTML 渲染", "文件管理"],
    y: 324,
    labelWidth: 102,
  },
  {
    label: "文件与项目",
    items: ["工作目录", "文件附件", "本地存储"],
    y: 370,
    labelWidth: 88,
  },
  {
    label: "剪贴板感知",
    items: ["实时监控剪贴板", "历史记录管理", "AI 主动读取调用"],
    y: 420,
    labelWidth: 92,
    highlight: true,
  },
  {
    label: "权限控制",
    items: ["Ask / Auto 模式", "权限弹窗"],
    y: 470,
    labelWidth: 78,
  },
  {
    label: "MCP 集成",
    items: ["连接管理", "工具路由"],
    y: 514,
    labelWidth: 72,
  },
  {
    label: "设置与配置",
    items: ["模型选择", "API 配置", "语言"],
    y: 558,
    labelWidth: 90,
  },
];

function buildCurvePath(startX: number, startY: number, endX: number, endY: number) {
  const deltaX = endX - startX;
  return `M ${startX} ${startY} C ${startX + deltaX * 0.26} ${startY}, ${startX + deltaX * 0.68} ${endY}, ${endX} ${endY}`;
}

function getChildOffsets(count: number) {
  if (count === 2) {
    return [-18, 18];
  }

  if (count === 3) {
    return [-26, 0, 26];
  }

  return Array.from({ length: count }, (_, index) => (index - (count - 1) / 2) * 22);
}

function MindMap() {
  return (
    <svg
      aria-labelledby="background-mindmap-title"
      className={styles.mindMap}
      viewBox="0 0 920 640"
      role="img"
    >
      <title id="background-mindmap-title">Deskhand 功能全貌思维导图</title>

      <defs>
        <radialGradient id="mindmapGlow" cx="42%" cy="50%" r="58%">
          <stop offset="0%" stopColor="rgba(29, 103, 95, 0.12)" />
          <stop offset="55%" stopColor="rgba(29, 103, 95, 0.04)" />
          <stop offset="100%" stopColor="rgba(29, 103, 95, 0)" />
        </radialGradient>
      </defs>

      <ellipse className={styles.mapAtmosphere} cx="468" cy="320" rx="368" ry="244" />

      <g className={styles.rootGroup}>
        <text className={styles.rootTitle} x="148" y="304" textAnchor="end">
          Deskhand
        </text>
        <text className={styles.rootSubtitle} x="148" y="330" textAnchor="end">
          桌面智能体客户端
        </text>
      </g>

      <circle className={styles.rootDot} cx={ROOT_X} cy={ROOT_Y} r="3.5" />

      {MINDMAP_BRANCHES.map((branch, branchIndex) => {
        const lineEndX = BRANCH_LABEL_X - 16;
        const labelY = branch.y - 8;
        const childX = branch.childX ?? 604;
        const afterLabelX = BRANCH_LABEL_X + branch.labelWidth;
        const childOffsets = getChildOffsets(branch.items.length);

        const branchStyle = {
          "--branch-delay": `${branchIndex * 70}ms`,
        } as CSSProperties;

        return (
          <g
            className={branch.highlight ? styles.branchHighlight : styles.branchBase}
            key={branch.label}
            style={branchStyle}
          >
            <path className={styles.branchPath} d={buildCurvePath(ROOT_X, ROOT_Y, lineEndX, branch.y)} />
            <text className={styles.branchLabel} x={BRANCH_LABEL_X} y={labelY}>
              {branch.label}
            </text>
            <path
              className={styles.branchCarry}
              d={buildCurvePath(afterLabelX + 12, branch.y, CHILD_FORK_X, branch.y)}
            />

            {branch.items.map((item, itemIndex) => {
              const itemY = branch.y + childOffsets[itemIndex];
              return (
                <g className={styles.itemGroup} key={item}>
                  <path className={styles.itemPath} d={buildCurvePath(CHILD_FORK_X, branch.y, childX, itemY)} />
                  <text className={styles.itemLabel} x={childX + 10} y={itemY + 4}>
                    {item}
                  </text>
                </g>
              );
            })}
          </g>
        );
      })}
    </svg>
  );
}

export function BackgroundSection({ section, index }: BackgroundSectionProps) {
  const closingParagraph = section.paragraphs[section.paragraphs.length - 1] ?? "";
  const openingParagraphs = section.paragraphs.slice(0, -1);
  const closingLines = closingParagraph.split("\n").filter(Boolean);

  return (
    <SectionCanvas id={section.id} index={index} tone={section.tone}>
      <div className={styles.layout}>
        <div className={styles.prose}>
          <p className={styles.kicker}>{section.kicker}</p>

          {openingParagraphs.map((paragraph) => (
            <p className={styles.paragraph} key={paragraph}>
              {paragraph}
            </p>
          ))}

          <p className={`${styles.paragraph} ${styles.closingParagraph}`}>
            <span className={styles.closingLead}>{closingLines[0]}</span>
            <span className={styles.closingFollowup}>{closingLines[1]}</span>
          </p>
        </div>

        <div aria-hidden="true" className={styles.divider} />

        <div className={styles.mapShell}>
          <MindMap />
        </div>
      </div>
    </SectionCanvas>
  );
}

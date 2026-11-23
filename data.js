/**
 * Hao Zhang — Structured Site Content (Bilingual EN / ZH)
 *
 * Edit this single file to update your bio, experience, education,
 * or publish new articles.
 *
 * Publishing a new article:
 *   1. Add a Markdown file at `posts/<slug>.md` (e.g. `posts/dual-path-reconciliation.md`)
 *   2. Append an entry to `copy.en.writing.posts` and `copy.zh.writing.posts`:
 *      {
 *        slug: "dual-path-reconciliation",
 *        date: "2026-12",
 *        title: "Designing Dual-Path State Reconciliation at Cloud Scale",
 *        summary: "Notes on pairing real-time streaming materialized views with batch backfill pipelines.",
 *        tags: ["Distributed Systems", "Streaming"],
 *        readTime: "6 min read",
 *      }
 *
 * Optional PDF resume button:
 *   Place a redacted `resume.pdf` in the repo root and set `resumeUrl: "./resume.pdf"`.
 */

window.SITE_DATA = {
  profile: {
    name: "Hao Zhang",
    handle: "haozzzdev",
    email: "haohaozhang0128@gmail.com",
    links: {
      github: "https://github.com/haozzzdev",
      linkedin: "https://www.linkedin.com/in/haozhang0128/",
      resumeUrl: "",
    },
  },

  copy: {
    en: {
      metaTitle: "Hao Zhang — Senior Software Engineer · Distributed Systems & Cloud",
      skipLink: "Skip to content",
      nav: {
        focus: "Focus",
        experience: "Experience",
        writing: "Writing",
        contact: "Contact",
      },
      hero: {
        kickerRole: "Senior Software Engineer",
        kickerOrg: "Google Cloud",
        kickerLoc: "Kirkland, WA",
        lead: "Architecting large-scale distributed infrastructure, multi-cloud control planes, and high-availability security platforms.",
        bio: "Currently leading an engineering squad at Google Cloud in Kirkland, WA—building multi-cloud resource ingestion and security graph infrastructure at scale. Previously at Amazon Alexa and Nexxen. M.S. in Computer Engineering, Columbia University.",
        ctaLinkedin: "LinkedIn",
        ctaGithub: "GitHub",
        ctaResume: "Resume (PDF)",
        ctaEmail: "Get in Touch",
      },
      focus: {
        eyebrow: "Core Focus",
        title: "What I Work On",
        items: [
          {
            num: "01",
            title: "Distributed Infrastructure",
            desc: "Multi-cloud control planes, Kubernetes internals, and fault-tolerant multi-terabyte backfill architectures across GCP, AWS, and Azure.",
          },
          {
            num: "02",
            title: "Streaming & State Reconciliation",
            desc: "Dual-path pipelines pairing real-time materialized views with Apache Beam / Flume batch sync, Cloud Spanner, and low-latency C++ backends.",
          },
          {
            num: "03",
            title: "Cloud Security & Leadership",
            desc: "Cloud Security Posture Management (CSPM), IAM & attack-path resource graphs, cross-org data contracts, and 99.99% availability platforms.",
          },
        ],
      },
      experience: {
        eyebrow: "Background",
        title: "Experience & Education",
        items: [
          {
            period: "04/2024 – Present",
            role: "Senior Software Engineer",
            org: "Google Cloud · Kirkland, WA",
            summary:
              "Leading a 4-engineer squad building Google Cloud's Multi-Cloud Resource Ingestion Control Plane across AWS & Azure for Security Command Center.",
          },
          {
            period: "04/2022 – 04/2024",
            role: "Software Engineer",
            org: "Google Cloud · Kirkland, WA",
            summary:
              "Engineered high-availability cloud security graph and policy evaluation platforms (IAM Policy Analyzer, Effective Tags Service).",
          },
          {
            period: "06/2021 – 04/2022",
            role: "Software Development Engineer",
            org: "Amazon Alexa · Seattle, WA",
            summary:
              "Built scalable microservices, operational tooling, and AWS infrastructure automation serving millions of Alexa endpoints.",
          },
          {
            period: "01/2020 – 06/2021",
            role: "Application Software Engineer",
            org: "Nexxen (formerly Amobee) · Redwood City, CA",
            summary:
              "Developed high-throughput Java & Spring analytics services and distributed reporting infrastructure (Hadoop, Druid, AWS S3).",
          },
        ],
        educationHeading: "Education",
        education: [
          {
            period: "M.S.",
            role: "Computer Engineering",
            org: "Columbia University · New York, NY",
          },
          {
            period: "B.S.",
            role: "Computer Science and Technology",
            org: "University of Electronic Science and Technology of China (UESTC) · Chengdu",
          },
        ],
        linkedinNote: "Full work history and details on LinkedIn.",
        linkedinCta: "View LinkedIn",
      },
      writing: {
        eyebrow: "Writing",
        title: "Articles & Notes",
        emptyTitle: "First essays in progress",
        emptyDesc:
          "Notes on distributed control planes, streaming state reconciliation, Kubernetes internals, and cloud security architecture will be published here.",
        plannedLabel: "Planned Topics",
        plannedTopics: [
          "Multi-Cloud Control Plane Architecture",
          "Dual-Path Streaming & Batch Reconciliation",
          "Kubernetes Scheduling & Isolation",
          "Cloud Security Graphs at Scale",
        ],
        readMore: "Read article",
        posts: [
          // Add published Markdown posts here (see file header comment for schema)
        ],
      },
      contact: {
        eyebrow: "Contact",
        title: "Let’s Connect",
        desc: "Open to connecting with engineers, architects, and teams working on distributed systems, cloud infrastructure, or security platforms.",
        copyEmail: "Copy Email",
        copied: "Copied!",
        sendEmail: "Send Email",
      },
      footer: {
        rights: "Hao Zhang",
        source: "Source",
        top: "Back to top",
      },
    },

    zh: {
      metaTitle: "Hao Zhang（张昊）— 资深软件工程师 · 分布式系统与云基础设施",
      skipLink: "跳转到正文",
      nav: {
        focus: "核心方向",
        experience: "工作与教育",
        writing: "文章与随笔",
        contact: "联系我",
      },
      hero: {
        kickerRole: "Senior Software Engineer",
        kickerOrg: "Google Cloud",
        kickerLoc: "美国华盛顿州 Kirkland",
        lead: "专注大规模分布式基础设施、多云控制平面与高可用安全平台的资深软件工程师。",
        bio: "现于 Google Cloud（Kirkland）担任 Senior Software Engineer，带队构建多云资源采集控制平面与大规模云安全图谱平台。曾就职于 Amazon Alexa 与 Nexxen，哥伦比亚大学计算机工程硕士。",
        ctaLinkedin: "LinkedIn",
        ctaGithub: "GitHub",
        ctaResume: "下载简历 (PDF)",
        ctaEmail: "联系交流",
      },
      focus: {
        eyebrow: "专业方向",
        title: "核心关注领域",
        items: [
          {
            num: "01",
            title: "分布式基础设施",
            desc: "跨 GCP、AWS、Azure 的多云控制平面、Kubernetes 底层编排，以及高容错、自动化限流的 TB 级数据回填架构。",
          },
          {
            num: "02",
            title: "流批一体与状态对账",
            desc: "实时流式物化视图与 Apache Beam / Flume 批处理结合的双通道状态同步架构，以及 Cloud Spanner 与低延迟 C++ 后端。",
          },
          {
            num: "03",
            title: "云安全与工程带队",
            desc: "云安全态势管理（CSPM）、IAM 与攻击路径图谱分析、跨团队数据契约治理以及 99.99% 高可用平台建设。",
          },
        ],
      },
      experience: {
        eyebrow: "个人履历",
        title: "工作经历与教育背景",
        items: [
          {
            period: "2024.04 – 至今",
            role: "Senior Software Engineer",
            org: "Google Cloud · Kirkland, WA",
            summary:
              "带领 4 人工程团队，从零到 GA 构建 Google Cloud 多云资源采集控制平面，支撑混合云场景下的 Security Command Center。",
          },
          {
            period: "2022.04 – 2024.04",
            role: "Software Engineer",
            org: "Google Cloud · Kirkland, WA",
            summary:
              "负责高可用云安全图谱与策略评估核心平台（IAM Policy Analyzer、Effective Tags Service）的架构设计与演进。",
          },
          {
            period: "2021.06 – 2022.04",
            role: "Software Development Engineer",
            org: "Amazon Alexa · Seattle, WA",
            summary:
              "构建服务数百万 Alexa 终端的微服务、运维工具以及 AWS CDK / CloudFormation 基础设施自动化体系。",
          },
          {
            period: "2020.01 – 2021.06",
            role: "Application Software Engineer",
            org: "Nexxen（原 Amobee）· Redwood City, CA",
            summary:
              "开发高吞吐 Java / Spring 分析微服务，并推进报表存储向 Hadoop、Druid 与 AWS S3 分布式架构迁移。",
          },
        ],
        educationHeading: "教育背景",
        education: [
          {
            period: "硕士",
            role: "计算机工程（MS in Computer Engineering）",
            org: "哥伦比亚大学（Columbia University）· 纽约",
          },
          {
            period: "学士",
            role: "计算机科学与技术（BS in Computer Science & Technology）",
            org: "电子科技大学（UESTC）· 成都",
          },
        ],
        linkedinNote: "更多工作细节与动态请见 LinkedIn。",
        linkedinCta: "查看 LinkedIn",
      },
      writing: {
        eyebrow: "技术沉淀",
        title: "文章与随笔",
        emptyTitle: "首批文章整理中",
        emptyDesc:
          "后续会在这里陆续记录多云控制平面、流批一体状态同步、Kubernetes 以及云安全架构相关的技术笔记。",
        plannedLabel: "计划主题",
        plannedTopics: [
          "多云资源采集控制平面设计",
          "流批一体状态对账与低延迟物化视图",
          "Kubernetes 调度与多租户隔离实践",
          "大规模云安全图谱架构演进",
        ],
        readMore: "阅读全文",
        posts: [
          // 发布新文章时在此追加条目，对应文件放在 posts/<slug>.md
        ],
      },
      contact: {
        eyebrow: "联系方式",
        title: "欢迎交流",
        desc: "欢迎与关注分布式系统、云基础设施或云安全方向的同行、架构师与团队建立联系。",
        copyEmail: "复制邮箱",
        copied: "已复制",
        sendEmail: "发送邮件",
      },
      footer: {
        rights: "Hao Zhang",
        source: "页面源码",
        top: "返回顶部",
      },
    },
  },
};

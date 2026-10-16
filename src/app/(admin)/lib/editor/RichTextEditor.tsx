"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import type { ChangeEvent } from "react"
import type { Editor } from "@tiptap/core"
import { EditorContent, EditorContext, useEditor } from "@tiptap/react"

// --- Tiptap Core Extensions ---
import { StarterKit } from "@tiptap/starter-kit"
import { Image } from "@tiptap/extension-image"
import { TaskItem, TaskList } from "@tiptap/extension-list"
import { TextAlign } from "@tiptap/extension-text-align"
import { Typography } from "@tiptap/extension-typography"
import { Highlight } from "@tiptap/extension-highlight"
import { Subscript } from "@tiptap/extension-subscript"
import { Superscript } from "@tiptap/extension-superscript"
import { Selection } from "@tiptap/extensions"
import { CodeBlock } from "@tiptap/extension-code-block"
import { Color } from "@tiptap/extension-color"
import { Placeholder } from "@tiptap/extension-placeholder"
import { Table, TableCell, TableHeader, TableRow } from "@tiptap/extension-table"
import { TextStyle } from "@tiptap/extension-text-style"
import { Underline } from "@tiptap/extension-underline"
import Audio from "@tiptap/extension-audio"

// --- UI Primitives ---
import { Button } from "@/components/tiptap-ui-primitive/button"
import { Spacer } from "@/components/tiptap-ui-primitive/spacer"
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
} from "@/components/tiptap-ui-primitive/toolbar"

// --- Tiptap Node ---
import { ImageUploadNode } from "@/components/tiptap-node/image-upload-node/image-upload-node-extension"
import { HorizontalRule } from "@/components/tiptap-node/horizontal-rule-node/horizontal-rule-node-extension"
import "@/components/tiptap-node/blockquote-node/blockquote-node.scss"
import "@/components/tiptap-node/code-block-node/code-block-node.scss"
import "@/components/tiptap-node/horizontal-rule-node/horizontal-rule-node.scss"
import "@/components/tiptap-node/list-node/list-node.scss"
import "@/components/tiptap-node/image-node/image-node.scss"
import "@/components/tiptap-node/heading-node/heading-node.scss"
import "@/components/tiptap-node/paragraph-node/paragraph-node.scss"

// --- Tiptap UI ---
import { HeadingDropdownMenu } from "@/components/tiptap-ui/heading-dropdown-menu"
import { ImageUploadButton } from "@/components/tiptap-ui/image-upload-button"
import { ListDropdownMenu } from "@/components/tiptap-ui/list-dropdown-menu"
import { BlockquoteButton } from "@/components/tiptap-ui/blockquote-button"
import { CodeBlockButton } from "@/components/tiptap-ui/code-block-button"
import {
  ColorHighlightPopover,
  ColorHighlightPopoverContent,
  ColorHighlightPopoverButton,
} from "@/components/tiptap-ui/color-highlight-popover"
import {
  LinkPopover,
  LinkContent,
  LinkButton,
} from "@/components/tiptap-ui/link-popover"
import { MarkButton } from "@/components/tiptap-ui/mark-button"
import { TextAlignButton } from "@/components/tiptap-ui/text-align-button"
import { UndoRedoButton } from "@/components/tiptap-ui/undo-redo-button"

// --- Icons ---
import { ArrowLeftIcon } from "@/components/tiptap-icons/arrow-left-icon"
import { HighlighterIcon } from "@/components/tiptap-icons/highlighter-icon"
import { LinkIcon } from "@/components/tiptap-icons/link-icon"

// --- Hooks ---
import { useIsBreakpoint } from "@/hooks/use-is-breakpoint"
import { useWindowSize } from "@/hooks/use-window-size"
import { useCursorVisibility } from "@/hooks/use-cursor-visibility"

// --- Components ---
import { ThemeToggle } from "@/components/tiptap-templates/simple/theme-toggle"

// --- Lib ---
import { handleImageUpload, MAX_FILE_SIZE } from "@/lib/tiptap-utils"

// --- Styles ---
import "./rich-text-editor.scss"

type TemplateInsertion = {
  id: string
  label: string
  html: string
}

type ToolbarMode = "basic" | "advanced"

const TEMPLATE_INSERTIONS: TemplateInsertion[] = [
  {
    id: "template-table",
    label: "Table",
    html:
      "<table><thead><tr><th>Header</th><th>Header</th></tr></thead><tbody><tr><td>Cell</td><td>Cell</td></tr><tr><td>Cell</td><td>Cell</td></tr></tbody></table><p></p>",
  },
  {
    id: "template-columns",
    label: "Two columns",
    html:
      '<div class="template-columns"><div><h3>Column 1</h3><p>Describe a feature here.</p></div><div><h3>Column 2</h3><p>Describe another feature here.</p></div></div><p></p>',
  },
  {
    id: "template-card",
    label: "Card",
    html:
      '<section class="template-card"><h3>Card title</h3><p>Summarize the highlighted idea here.</p></section><p></p>',
  },
]

interface MainToolbarContentProps {
  onHighlighterClick: () => void
  onLinkClick: () => void
  isMobile: boolean
  toolbarMode: ToolbarMode
  onToolbarModeChange: (mode: ToolbarMode) => void
  showSource: boolean
  onSourceToggle: () => void
  onTemplateInsert: (item: TemplateInsertion) => void
}

const MainToolbarContent = ({
  onHighlighterClick,
  onLinkClick,
  isMobile,
  toolbarMode,
  onToolbarModeChange,
  showSource,
  onSourceToggle,
  onTemplateInsert,
}: MainToolbarContentProps) => {
  const isAdvanced = toolbarMode === "advanced"

  return (
    <>
      <div className="flex flex-col">
        <ToolbarGroup>
          <ToolbarGroup className="rich-text-editor-toolbar-mode">
            <Button
              type="button"
              variant={toolbarMode === "basic" ? "primary" : "ghost"}
              onClick={() => onToolbarModeChange("basic")}
            >
              Basic
            </Button>
            <Button
              type="button"
              variant={toolbarMode === "advanced" ? "primary" : "ghost"}
              onClick={() => onToolbarModeChange("advanced")}
            >
              Advanced
            </Button>
            <Button
              type="button"
              variant={showSource ? "primary" : "ghost"}
              tooltip="Toggle source/html view"
              onClick={onSourceToggle}
            >
              {showSource ? "Editor view" : "Source view"}
            </Button>
          </ToolbarGroup>

          <Spacer />

          <ToolbarGroup>
            <UndoRedoButton action="undo" />
            <UndoRedoButton action="redo" />
          </ToolbarGroup>

          <ToolbarSeparator />

          <ToolbarGroup>
            <HeadingDropdownMenu modal={false} levels={[1, 2, 3, 4]} />
            <ListDropdownMenu
              modal={false}
              types={["bulletList", "orderedList", "taskList"]}
            />
            <BlockquoteButton />
            <CodeBlockButton />
          </ToolbarGroup>

          <ToolbarSeparator />

          <ToolbarGroup>
            <MarkButton type="bold" />
            <MarkButton type="italic" />
            <MarkButton type="strike" />
            <MarkButton type="code" />
            <MarkButton type="underline" />
            {!isMobile ? (
              <ColorHighlightPopover />
            ) : (
              <ColorHighlightPopoverButton onClick={onHighlighterClick} />
            )}
            {!isMobile ? <LinkPopover /> : <LinkButton onClick={onLinkClick} />}
          </ToolbarGroup>

          <ToolbarSeparator />

          <ToolbarGroup>
            <MarkButton type="superscript" />
            <MarkButton type="subscript" />
          </ToolbarGroup>

          <ToolbarSeparator />

          <ToolbarGroup>
            <TextAlignButton align="left" />
            <TextAlignButton align="center" />
            <TextAlignButton align="right" />
            <TextAlignButton align="justify" />
          </ToolbarGroup>

          <ToolbarSeparator />

          <ToolbarGroup>
            <ImageUploadButton text="Add" />
          </ToolbarGroup>

          <Spacer />

          {isMobile && <ToolbarSeparator />}

          <ToolbarGroup>
            <ThemeToggle />
          </ToolbarGroup>
        </ToolbarGroup>
        {isAdvanced && (
          <>
            <ToolbarGroup>
              <ToolbarGroup className="rich-text-editor-template-group">
                {TEMPLATE_INSERTIONS.map((template) => (
                  <Button
                    key={template.id}
                    type="button"
                    variant="ghost"
                    onClick={() => onTemplateInsert(template)}
                  >
                    {template.label}
                  </Button>
                ))}
              </ToolbarGroup>
            </ToolbarGroup>
          </>
        )}
      </div>
    </>
  )
}

const MobileToolbarContent = ({
  type,
  onBack,
}: {
  type: "highlighter" | "link"
  onBack: () => void
}) => (
  <>
    <ToolbarGroup>
      <Button variant="ghost" onClick={onBack}>
        <ArrowLeftIcon className="tiptap-button-icon" />
        {type === "highlighter" ? (
          <HighlighterIcon className="tiptap-button-icon" />
        ) : (
          <LinkIcon className="tiptap-button-icon" />
        )}
      </Button>
    </ToolbarGroup>

    <ToolbarSeparator />

    {type === "highlighter" ? (
      <ColorHighlightPopoverContent />
    ) : (
      <LinkContent />
    )}
  </>
)

export interface RichTextEditorProps {
  value?: string
  onChange?: (value: string) => void
  minHeight?: number
  placeholder?: string
}

export default function RichTextEditor({
  value = "",
  onChange,
  minHeight = 280,
  placeholder = "Share the story behind this blog post...",
}: RichTextEditorProps) {
  const isMobile = useIsBreakpoint()
  const { height } = useWindowSize()
  const [mobileView, setMobileView] = useState<"main" | "highlighter" | "link">
    ("main")
  const [toolbarMode, setToolbarMode] = useState<ToolbarMode>("basic")
  const [showSource, setShowSource] = useState(false)
  const [sourceHtml, setSourceHtml] = useState(value)
  const toolbarRef = useRef<HTMLDivElement>(null)

  const handleUpdate = useCallback(
    ({ editor }: { editor: Editor }) => {
      onChange?.(editor.getHTML())
    },
    [onChange]
  )

  const editor = useEditor({
    immediatelyRender: false,
    editorProps: {
      attributes: {
        autocomplete: "off",
        autocorrect: "off",
        autocapitalize: "off",
        class: "rich-text-editor",
        "aria-label": "Content editor",
        "data-placeholder": placeholder,
      },
    },
    extensions: [
      StarterKit.configure({
        horizontalRule: false,
        link: {
          openOnClick: false,
          enableClickSelection: true,
        },
      }),
      Placeholder.configure({ placeholder }),
      HorizontalRule,
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TaskList,
      TaskItem.configure({ nested: true }),
      Highlight.configure({ multicolor: true }),
      Image,
      Typography,
      Superscript,
      Subscript,
      Selection,
      CodeBlock,
      Color,
      TextStyle,
      Underline,
      ImageUploadNode.configure({
        accept: "image/*",
        maxSize: MAX_FILE_SIZE,
        limit: 3,
        upload: handleImageUpload,
        onError: (error) => console.error("Upload failed:", error),
      }),
      Audio.configure({
        controls: true,
        preload: "metadata",
      }),
    ],
    onUpdate: handleUpdate,
  })

  useEffect(() => {
    if (!editor) return
    const normalizedValue = value || ""
    const currentHtml = editor.getHTML()
    const normalizedCurrent = currentHtml === "<p></p>" ? "" : currentHtml
    if (normalizedCurrent === normalizedValue) return
    editor.commands.setContent(normalizedValue || "<p></p>", { emitUpdate: false })
  }, [editor, value])

  useEffect(() => {
    if (showSource) {
      const html = editor?.getHTML() ?? value ?? ""
      setSourceHtml(html)
      return
    }
    setSourceHtml(value ?? "")
  }, [editor, showSource, value])

  const handleTemplateInsert = useCallback(
    (template: TemplateInsertion) => {
      if (!editor) return
      editor.chain().focus().insertContent(template.html).run()
    },
    [editor]
  )

  const handleSourceChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    setSourceHtml(event.target.value)
  }, [])

  const handleSourceBlur = useCallback(() => {
    if (!editor) return
    const normalized = sourceHtml || "<p></p>"
    if (editor.getHTML() === normalized) return
    editor.commands.setContent(normalized, { emitUpdate: false })
    onChange?.(normalized)
  }, [editor, onChange, sourceHtml])

  useEffect(() => {
    if (!isMobile && mobileView !== "main") {
      setMobileView("main")
    }
  }, [isMobile, mobileView])

  const rect = useCursorVisibility({
    editor,
    overlayHeight: toolbarRef.current?.getBoundingClientRect().height ?? 0,
  })

  const toolbarStyle = isMobile
    ? {
      bottom: `calc(100% - ${height - rect.y}px)`,
    }
    : undefined

  if (!editor) {
    return (
      <div className="rich-text-editor">
        <div className="rich-text-editor-body" style={{ minHeight }} />
      </div>
    )
  }

  return (
    <div className="rich-text-editor">
      <EditorContext.Provider value={{ editor }}>
        <Toolbar
          ref={toolbarRef}
          className="rich-text-editor-toolbar"
          style={toolbarStyle}
        >
          {mobileView === "main" ? (
            <MainToolbarContent
              onHighlighterClick={() => setMobileView("highlighter")}
              onLinkClick={() => setMobileView("link")}
              isMobile={isMobile}
              toolbarMode={toolbarMode}
              onToolbarModeChange={setToolbarMode}
              showSource={showSource}
              onSourceToggle={() => setShowSource((prev) => !prev)}
              onTemplateInsert={handleTemplateInsert}
            />
          ) : (
            <MobileToolbarContent
              type={mobileView === "highlighter" ? "highlighter" : "link"}
              onBack={() => setMobileView("main")}
            />
          )}
        </Toolbar>

        <div className="rich-text-editor-body" style={{ minHeight }}>
          {showSource ? (
            <textarea
              value={sourceHtml}
              onChange={handleSourceChange}
              onBlur={handleSourceBlur}
              className="rich-text-editor-source"
              style={{ minHeight }}
              aria-label="Editor source"
            />
          ) : (
            <EditorContent
              editor={editor}
              role="presentation"
              className="rich-text-editor-content simple-editor"
            />
          )}
        </div>
      </EditorContext.Provider>
    </div>
  )
}






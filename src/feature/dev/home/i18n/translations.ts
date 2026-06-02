import type { Language } from '@/i18n/types'

export interface DevHomeTranslations {
  title: string
  lead: string
  description: string
  instruction: string
  tools: {
    id: string
    name: string
    description: string
    path: string
  }[]
}

export const devHomeTranslations: Record<Language, DevHomeTranslations> = {
  en: {
    title: 'Dev Tools',
    lead: 'Tools for making repeated development tasks a little easier.',
    description:
      'A place for developer utilities such as visual JSON editing, data conversion, text comparison, and code cleanup.',
    instruction: 'Choose a tool from the left menu.',
    tools: [
      {
        id: 'markdown-editor',
        name: 'Markdown Editor',
        description: 'A WYSIWYG editor for writing and previewing Markdown',
        path: '/dev/markdown-editor',
      },
      {
        id: 'json-editor',
        name: 'JSON Editor',
        description: 'A visual editor for viewing and editing JSON data',
        path: '/dev/json-editor',
      },
      {
        id: 'regex-playground',
        name: 'Regex Playground',
        description: 'Test regular expressions with real-time highlighting',
        path: '/dev/regex-playground',
      },
      {
        id: 'jwt-decoder',
        name: 'JWT Decoder',
        description: 'Decode and inspect JWT tokens instantly',
        path: '/dev/jwt-decoder',
      },
      {
        id: 'url-encoder-decoder',
        name: 'URL Encoder / Decoder',
        description: 'Encode or decode URLs quickly',
        path: '/dev/url-encoder-decoder',
      },
      {
        id: 'timestamp-converter',
        name: 'Timestamp Converter',
        description: 'Convert between Unix timestamps and readable dates',
        path: '/dev/timestamp-converter',
      },
      {
        id: 'diff-viewer',
        name: 'Diff Viewer',
        description: 'Compare two text blocks line by line',
        path: '/dev/diff-viewer',
      },
      {
        id: 'json-yaml-converter',
        name: 'JSON YAML Converter',
        description: 'Convert between JSON and YAML formats',
        path: '/dev/json-yaml-converter',
      },
      {
        id: 'empty-line-cleaner',
        name: 'Empty Line Cleaner',
        description: 'Remove empty lines from text',
        path: '/dev/empty-line-cleaner',
      },
    ],
  },
  ko: {
    title: '개발 도구',
    lead: '개발 과정에서 반복적으로 필요한 작업들을 조금 더 편하게 처리하기 위해 만들었습니다.',
    description:
      'JSON 구조를 시각적으로 편집하거나, 데이터를 변환하거나, 코드를 다듬는 등 개발과 관련된 각종 편의 도구들을 한 곳에 모아둔 공간입니다.',
    instruction: '왼쪽 메뉴에서 원하는 도구를 선택해 주세요.',
    tools: [
      {
        id: 'markdown-editor',
        name: '마크다운 에디터',
        description: '마크다운을 작성하고 실시간 미리보기를 할 수 있는 위지윅 에디터',
        path: '/dev/markdown-editor',
      },
      {
        id: 'json-editor',
        name: 'JSON 에디터',
        description: 'JSON 데이터를 시각적으로 편집하고 확인할 수 있는 에디터',
        path: '/dev/json-editor',
      },
      {
        id: 'regex-playground',
        name: '정규식 플레이그라운드',
        description: '실시간 하이라이팅으로 정규식을 테스트',
        path: '/dev/regex-playground',
      },
      {
        id: 'jwt-decoder',
        name: 'JWT 디코더',
        description: 'JWT 토큰을 즉시 디코딩하고 검사',
        path: '/dev/jwt-decoder',
      },
      {
        id: 'url-encoder-decoder',
        name: 'URL 인코더 / 디코더',
        description: 'URL을 빠르게 인코딩 또는 디코딩',
        path: '/dev/url-encoder-decoder',
      },
      {
        id: 'timestamp-converter',
        name: '타임스탬프 변환기',
        description: 'Unix 타임스탬프와 읽을 수 있는 날짜 간 변환',
        path: '/dev/timestamp-converter',
      },
      {
        id: 'diff-viewer',
        name: 'Diff 뷰어',
        description: '두 텍스트의 줄 단위 차이를 확인',
        path: '/dev/diff-viewer',
      },
      {
        id: 'json-yaml-converter',
        name: 'JSON YAML 변환기',
        description: 'JSON과 YAML 형식 간 변환',
        path: '/dev/json-yaml-converter',
      },
      {
        id: 'empty-line-cleaner',
        name: '빈 줄 정리기',
        description: '텍스트에서 빈 줄 제거',
        path: '/dev/empty-line-cleaner',
      },
    ],
  },
  ja: {
    title: '開発ツール',
    lead: '開発中に繰り返し必要になる作業を少し楽にするためのツールです。',
    description:
      'JSONの視覚的な編集、データ変換、テキスト比較、コード整形など、開発に関する便利なツールをまとめた場所です。',
    instruction: '左のメニューから使いたいツールを選んでください。',
    tools: [
      {
        id: 'markdown-editor',
        name: 'Markdownエディタ',
        description: 'Markdownを書いてリアルタイムプレビューできるWYSIWYGエディタ',
        path: '/dev/markdown-editor',
      },
      {
        id: 'json-editor',
        name: 'JSONエディタ',
        description: 'JSONデータを視覚的に編集・確認できるエディタ',
        path: '/dev/json-editor',
      },
      {
        id: 'regex-playground',
        name: 'Regex Playground',
        description: 'リアルタイムハイライトで正規表現をテスト',
        path: '/dev/regex-playground',
      },
      {
        id: 'jwt-decoder',
        name: 'JWTデコーダー',
        description: 'JWTトークンを即座にデコードして検査',
        path: '/dev/jwt-decoder',
      },
      {
        id: 'url-encoder-decoder',
        name: 'URLエンコーダー / デコーダー',
        description: 'URLを素早くエンコードまたはデコード',
        path: '/dev/url-encoder-decoder',
      },
      {
        id: 'timestamp-converter',
        name: 'タイムスタンプ変換',
        description: 'Unixタイムスタンプと読みやすい日付の間の変換',
        path: '/dev/timestamp-converter',
      },
      {
        id: 'diff-viewer',
        name: 'Diffビューア',
        description: '2つのテキストを行単位で比較',
        path: '/dev/diff-viewer',
      },
      {
        id: 'json-yaml-converter',
        name: 'JSON YAML変換',
        description: 'JSONとYAML形式の間の変換',
        path: '/dev/json-yaml-converter',
      },
      {
        id: 'empty-line-cleaner',
        name: '空行クリーナー',
        description: 'テキストから空行を削除',
        path: '/dev/empty-line-cleaner',
      },
    ],
  },
  'zh-Hans': {
    title: '开发工具',
    lead: '用于让重复的开发任务更轻松一些的工具。',
    description:
      '这里汇集了可视化 JSON 编辑、数据转换、文本比较和代码整理等开发相关实用工具。',
    instruction: '请从左侧菜单选择工具。',
    tools: [
      {
        id: 'markdown-editor',
        name: 'Markdown编辑器',
        description: '可实时预览的所见即所得Markdown编辑器',
        path: '/dev/markdown-editor',
      },
      {
        id: 'json-editor',
        name: 'JSON编辑器',
        description: '可视化的JSON数据查看和编辑工具',
        path: '/dev/json-editor',
      },
      {
        id: 'regex-playground',
        name: 'Regex Playground',
        description: '通过实时高亮测试正则表达式',
        path: '/dev/regex-playground',
      },
      {
        id: 'jwt-decoder',
        name: 'JWT解码器',
        description: '即时解码和检查JWT令牌',
        path: '/dev/jwt-decoder',
      },
      {
        id: 'url-encoder-decoder',
        name: 'URL编码 / 解码',
        description: '快速编码或解码URL',
        path: '/dev/url-encoder-decoder',
      },
      {
        id: 'timestamp-converter',
        name: '时间戳转换器',
        description: '在Unix时间戳和可读日期之间转换',
        path: '/dev/timestamp-converter',
      },
      {
        id: 'diff-viewer',
        name: 'Diff查看器',
        description: '按行比较两段文本',
        path: '/dev/diff-viewer',
      },
      {
        id: 'json-yaml-converter',
        name: 'JSON YAML转换器',
        description: '在JSON和YAML格式之间转换',
        path: '/dev/json-yaml-converter',
      },
      {
        id: 'empty-line-cleaner',
        name: '空行清理器',
        description: '从文本中移除空行',
        path: '/dev/empty-line-cleaner',
      },
    ],
  },
  'zh-Hant': {
    title: '開發工具',
    lead: '用來讓重複的開發工作更輕鬆一些的工具。',
    description:
      '這裡彙整了視覺化 JSON 編輯、資料轉換、文字比較和程式碼整理等開發相關實用工具。',
    instruction: '請從左側選單選擇工具。',
    tools: [
      {
        id: 'markdown-editor',
        name: 'Markdown編輯器',
        description: '可即時預覽的所見即所得Markdown編輯器',
        path: '/dev/markdown-editor',
      },
      {
        id: 'json-editor',
        name: 'JSON編輯器',
        description: '視覺化的JSON資料檢視和編輯工具',
        path: '/dev/json-editor',
      },
      {
        id: 'regex-playground',
        name: 'Regex Playground',
        description: '透過即時高亮測試正規表示式',
        path: '/dev/regex-playground',
      },
      {
        id: 'jwt-decoder',
        name: 'JWT解碼器',
        description: '即時解碼和檢查JWT令牌',
        path: '/dev/jwt-decoder',
      },
      {
        id: 'url-encoder-decoder',
        name: 'URL編碼 / 解碼',
        description: '快速編碼或解碼URL',
        path: '/dev/url-encoder-decoder',
      },
      {
        id: 'timestamp-converter',
        name: '時間戳轉換器',
        description: '在Unix時間戳和可讀日期之間轉換',
        path: '/dev/timestamp-converter',
      },
      {
        id: 'diff-viewer',
        name: 'Diff檢視器',
        description: '逐行比較兩段文字',
        path: '/dev/diff-viewer',
      },
      {
        id: 'json-yaml-converter',
        name: 'JSON YAML轉換器',
        description: '在JSON和YAML格式之間轉換',
        path: '/dev/json-yaml-converter',
      },
      {
        id: 'empty-line-cleaner',
        name: '空行清理器',
        description: '從文字中移除空行',
        path: '/dev/empty-line-cleaner',
      },
    ],
  },
  es: {
    title: 'Herramientas Dev',
    lead: 'Herramientas para hacer más cómodas las tareas repetitivas de desarrollo.',
    description:
      'Un espacio para utilidades de desarrollo como edición visual de JSON, conversión de datos, comparación de texto y limpieza de código.',
    instruction: 'Elige una herramienta en el menú izquierdo.',
    tools: [
      {
        id: 'markdown-editor',
        name: 'Editor Markdown',
        description: 'Un editor WYSIWYG para escribir y previsualizar Markdown',
        path: '/dev/markdown-editor',
      },
      {
        id: 'json-editor',
        name: 'Editor JSON',
        description: 'Un editor visual para ver y editar datos JSON',
        path: '/dev/json-editor',
      },
      {
        id: 'regex-playground',
        name: 'Regex Playground',
        description: 'Prueba expresiones regulares con resaltado en tiempo real',
        path: '/dev/regex-playground',
      },
      {
        id: 'jwt-decoder',
        name: 'JWT Decoder',
        description: 'Decodifica e inspecciona tokens JWT al instante',
        path: '/dev/jwt-decoder',
      },
      {
        id: 'url-encoder-decoder',
        name: 'URL Encoder / Decoder',
        description: 'Codifica o decodifica URLs rápidamente',
        path: '/dev/url-encoder-decoder',
      },
      {
        id: 'timestamp-converter',
        name: 'Timestamp Converter',
        description: 'Convierte entre timestamps Unix y fechas legibles',
        path: '/dev/timestamp-converter',
      },
      {
        id: 'diff-viewer',
        name: 'Visor Diff',
        description: 'Compara dos bloques de texto línea por línea',
        path: '/dev/diff-viewer',
      },
      {
        id: 'json-yaml-converter',
        name: 'JSON YAML Converter',
        description: 'Convierte entre formatos JSON y YAML',
        path: '/dev/json-yaml-converter',
      },
      {
        id: 'empty-line-cleaner',
        name: 'Empty Line Cleaner',
        description: 'Elimina líneas vacías del texto',
        path: '/dev/empty-line-cleaner',
      },
    ],
  },
  pt: {
    title: 'Ferramentas Dev',
    lead: 'Ferramentas para deixar tarefas repetitivas de desenvolvimento mais fáceis.',
    description:
      'Um espaço para utilitários de desenvolvimento como edição visual de JSON, conversão de dados, comparação de texto e limpeza de código.',
    instruction: 'Escolha uma ferramenta no menu à esquerda.',
    tools: [
      {
        id: 'markdown-editor',
        name: 'Editor Markdown',
        description: 'Um editor WYSIWYG para escrever e visualizar Markdown',
        path: '/dev/markdown-editor',
      },
      {
        id: 'json-editor',
        name: 'Editor JSON',
        description: 'Um editor visual para visualizar e editar dados JSON',
        path: '/dev/json-editor',
      },
      {
        id: 'regex-playground',
        name: 'Regex Playground',
        description: 'Teste expressões regulares com destaque em tempo real',
        path: '/dev/regex-playground',
      },
      {
        id: 'jwt-decoder',
        name: 'JWT Decoder',
        description: 'Decodifique e inspecione tokens JWT instantaneamente',
        path: '/dev/jwt-decoder',
      },
      {
        id: 'url-encoder-decoder',
        name: 'URL Encoder / Decoder',
        description: 'Codifique ou decodifique URLs rapidamente',
        path: '/dev/url-encoder-decoder',
      },
      {
        id: 'timestamp-converter',
        name: 'Timestamp Converter',
        description: 'Converta entre timestamps Unix e datas legíveis',
        path: '/dev/timestamp-converter',
      },
      {
        id: 'diff-viewer',
        name: 'Visualizador Diff',
        description: 'Compare dois blocos de texto linha por linha',
        path: '/dev/diff-viewer',
      },
      {
        id: 'json-yaml-converter',
        name: 'JSON YAML Converter',
        description: 'Converta entre formatos JSON e YAML',
        path: '/dev/json-yaml-converter',
      },
      {
        id: 'empty-line-cleaner',
        name: 'Empty Line Cleaner',
        description: 'Remova linhas vazias do texto',
        path: '/dev/empty-line-cleaner',
      },
    ],
  },
  de: {
    title: 'Dev Tools',
    lead: 'Werkzeuge, die wiederkehrende Entwicklungsaufgaben etwas einfacher machen.',
    description:
      'Ein Ort für Entwicklungshelfer wie visuelle JSON-Bearbeitung, Datenkonvertierung, Textvergleich und Code-Bereinigung.',
    instruction: 'Wähle ein Werkzeug im linken Menü.',
    tools: [
      {
        id: 'markdown-editor',
        name: 'Markdown-Editor',
        description: 'Ein WYSIWYG-Editor zum Schreiben und Vorschauen von Markdown',
        path: '/dev/markdown-editor',
      },
      {
        id: 'json-editor',
        name: 'JSON-Editor',
        description: 'Ein visueller Editor zum Anzeigen und Bearbeiten von JSON-Daten',
        path: '/dev/json-editor',
      },
      {
        id: 'regex-playground',
        name: 'Regex Playground',
        description: 'Teste reguläre Ausdrücke mit Echtzeit-Hervorhebung',
        path: '/dev/regex-playground',
      },
      {
        id: 'jwt-decoder',
        name: 'JWT Decoder',
        description: 'JWT-Tokens sofort decodieren und inspizieren',
        path: '/dev/jwt-decoder',
      },
      {
        id: 'url-encoder-decoder',
        name: 'URL Encoder / Decoder',
        description: 'URLs schnell codieren oder decodieren',
        path: '/dev/url-encoder-decoder',
      },
      {
        id: 'timestamp-converter',
        name: 'Timestamp Converter',
        description: 'Zwischen Unix-Timestamps und lesbaren Daten konvertieren',
        path: '/dev/timestamp-converter',
      },
      {
        id: 'diff-viewer',
        name: 'Diff Viewer',
        description: 'Zwei Textblöcke zeilenweise vergleichen',
        path: '/dev/diff-viewer',
      },
      {
        id: 'json-yaml-converter',
        name: 'JSON YAML Converter',
        description: 'Zwischen JSON- und YAML-Formaten konvertieren',
        path: '/dev/json-yaml-converter',
      },
      {
        id: 'empty-line-cleaner',
        name: 'Empty Line Cleaner',
        description: 'Leerzeilen aus Text entfernen',
        path: '/dev/empty-line-cleaner',
      },
    ],
  },
  fr: {
    title: 'Outils Dev',
    lead: 'Des outils pour rendre les tâches de développement répétitives un peu plus simples.',
    description:
      "Un espace pour les utilitaires de développement comme l'édition visuelle JSON, la conversion de données, la comparaison de texte et le nettoyage de code.",
    instruction: 'Choisissez un outil dans le menu de gauche.',
    tools: [
      {
        id: 'markdown-editor',
        name: 'Éditeur Markdown',
        description: 'Un éditeur WYSIWYG pour écrire et prévisualiser du Markdown',
        path: '/dev/markdown-editor',
      },
      {
        id: 'json-editor',
        name: 'Éditeur JSON',
        description: 'Un éditeur visuel pour afficher et modifier les données JSON',
        path: '/dev/json-editor',
      },
      {
        id: 'regex-playground',
        name: 'Regex Playground',
        description: "Testez les expressions régulières avec surbrillance en temps réel",
        path: '/dev/regex-playground',
      },
      {
        id: 'jwt-decoder',
        name: 'JWT Decoder',
        description: 'Décodez et inspectez les tokens JWT instantanément',
        path: '/dev/jwt-decoder',
      },
      {
        id: 'url-encoder-decoder',
        name: 'URL Encoder / Decoder',
        description: 'Encodez ou décodez rapidement des URLs',
        path: '/dev/url-encoder-decoder',
      },
      {
        id: 'timestamp-converter',
        name: 'Timestamp Converter',
        description: 'Convertissez entre timestamps Unix et dates lisibles',
        path: '/dev/timestamp-converter',
      },
      {
        id: 'diff-viewer',
        name: 'Visionneuse Diff',
        description: 'Comparez deux blocs de texte ligne par ligne',
        path: '/dev/diff-viewer',
      },
      {
        id: 'json-yaml-converter',
        name: 'JSON YAML Converter',
        description: 'Convertissez entre les formats JSON et YAML',
        path: '/dev/json-yaml-converter',
      },
      {
        id: 'empty-line-cleaner',
        name: 'Empty Line Cleaner',
        description: 'Supprimez les lignes vides du texte',
        path: '/dev/empty-line-cleaner',
      },
    ],
  },
}
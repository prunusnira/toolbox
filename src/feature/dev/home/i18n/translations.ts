import type { Language } from '@/i18n/types'

export const devHomeTranslations: Record<
  Language,
  {
    title: string
    lead: string
    description: string
    instruction: string
  }
> = {
  en: {
    title: 'Dev Tools',
    lead: 'Tools for making repeated development tasks a little easier.',
    description:
      'A place for developer utilities such as visual JSON editing, data conversion, text comparison, and code cleanup.',
    instruction: 'Choose a tool from the left menu.',
  },
  ko: {
    title: '개발 도구',
    lead: '개발 과정에서 반복적으로 필요한 작업들을 조금 더 편하게 처리하기 위해 만들었습니다.',
    description:
      'JSON 구조를 시각적으로 편집하거나, 데이터를 변환하거나, 코드를 다듬는 등 개발과 관련된 각종 편의 도구들을 한 곳에 모아둔 공간입니다.',
    instruction: '왼쪽 메뉴에서 원하는 도구를 선택해 주세요.',
  },
  ja: {
    title: '開発ツール',
    lead: '開発中に繰り返し必要になる作業を少し楽にするためのツールです。',
    description:
      'JSONの視覚的な編集、データ変換、テキスト比較、コード整形など、開発に関する便利なツールをまとめた場所です。',
    instruction: '左のメニューから使いたいツールを選んでください。',
  },
  'zh-Hans': {
    title: '开发工具',
    lead: '用于让重复的开发任务更轻松一些的工具。',
    description:
      '这里汇集了可视化 JSON 编辑、数据转换、文本比较和代码整理等开发相关实用工具。',
    instruction: '请从左侧菜单选择工具。',
  },
  'zh-Hant': {
    title: '開發工具',
    lead: '用來讓重複的開發工作更輕鬆一些的工具。',
    description:
      '這裡彙整了視覺化 JSON 編輯、資料轉換、文字比較和程式碼整理等開發相關實用工具。',
    instruction: '請從左側選單選擇工具。',
  },
  es: {
    title: 'Herramientas Dev',
    lead: 'Herramientas para hacer más cómodas las tareas repetitivas de desarrollo.',
    description:
      'Un espacio para utilidades de desarrollo como edición visual de JSON, conversión de datos, comparación de texto y limpieza de código.',
    instruction: 'Elige una herramienta en el menú izquierdo.',
  },
  pt: {
    title: 'Ferramentas Dev',
    lead: 'Ferramentas para deixar tarefas repetitivas de desenvolvimento mais fáceis.',
    description:
      'Um espaço para utilitários de desenvolvimento como edição visual de JSON, conversão de dados, comparação de texto e limpeza de código.',
    instruction: 'Escolha uma ferramenta no menu à esquerda.',
  },
  de: {
    title: 'Dev Tools',
    lead: 'Werkzeuge, die wiederkehrende Entwicklungsaufgaben etwas einfacher machen.',
    description:
      'Ein Ort für Entwicklungshelfer wie visuelle JSON-Bearbeitung, Datenkonvertierung, Textvergleich und Code-Bereinigung.',
    instruction: 'Wähle ein Werkzeug im linken Menü.',
  },
  fr: {
    title: 'Outils Dev',
    lead: 'Des outils pour rendre les tâches de développement répétitives un peu plus simples.',
    description:
      'Un espace pour les utilitaires de développement comme l’édition visuelle JSON, la conversion de données, la comparaison de texte et le nettoyage de code.',
    instruction: 'Choisissez un outil dans le menu de gauche.',
  },
}

export interface IProjects {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  icon: null;
  archived: boolean;
  url: string;
  created_by: {
    object: string;
    id: string;
  };
  last_edited_by: {
    object: string;
    id: string;
  };
  cover: {
    type: string;
    external: {
      url: string;
    };
  };
  parent: {
    type: string;
    database_id: string;
  };

  properties: {
    Video?: {
      id: string;
      type: string;
      url: string;
    };
    Link: {
      id: string;
      type: string;
      url: string;
    };
    Description: {
      id: string;
      type: string;
      rich_text: [
        {
          type: string;
          text: {
            content: string;
            link: null;
          };
          annotations: {
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
            code: false;
            color: string;
          };
          plain_text: string;
          href: null;
        }
      ];
    };
    Date: {
      id: string;
      type: string;
      date: {
        start: string;
        end: string;
        time_zone: null;
      };
    };
    Stack: {
      id: string;
      type: string;
      multi_select: [
        {
          id: string;
          name: string;
          color: string;
        }
      ];
    };
    Project: {
      rich_text: [
        {
          plain_text: string;
        }
      ];
    };
    Name: {
      id: string;
      type: string;
      title: [
        {
          type: string;
          text: {
            content: string;
            link: null;
          };
          annotations: {
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
            code: boolean;
            color: string;
          };
          plain_text: string;
          href: null;
        }
      ];
    };
  };
}

export interface IProjectProps {
  [key: string]: any;
}

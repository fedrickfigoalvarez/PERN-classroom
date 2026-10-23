import {
  BaseRecord,
  DataProvider,
  GetListParams,
  GetListResponse,
} from "@refinedev/core";

const MOCK_SUBJECTS = [
  {
    id: 1,
    code: "DA101",
    name: "Intro to Data Analytics",
    department: "Data Analytics",
  },
  { id: 2, code: "EN101", name: "English Composition", department: "English" },
  { id: 3, code: "EN102", name: "Advanced English", department: "English" },
  {
    id: 4,
    code: "CS102",
    name: "Data Structures and Algorithms",
    department: "CS",
  },
  {
    id: 5,
    code: "CS103",
    name: "Database Management Systems",
    department: "CS",
  },
];

export const mockDataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({
    resource,
  }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== "subjects") return { data: [] as TData[], total: 0 };
    return {
      data: MOCK_SUBJECTS as unknown as TData[],
      total: MOCK_SUBJECTS.length,
    };
  },

  getOne: async () => {
    throw new Error("Not present in mock");
  },
  create: async () => {
    throw new Error("Not present in mock");
  },
  update: async () => {
    throw new Error("Not present in mock");
  },
  deleteOne: async () => {
    throw new Error("Not present in mock");
  },

  getApiUrl: () => "",
};

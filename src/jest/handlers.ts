import { http, HttpResponse } from "msw";
import { mockedUser } from "./fixtures";
import { LoginUser } from "./types";

interface Response {
  user: LoginUser;
}

export const handlers = [
  http.post("*/authenticate", async ({ request }) => {
    const body = (await request.json()) as Response;

    if (body!.user.userName === "salahqerem")
      return HttpResponse.json(
        { error: "Internal Server Error" },
        { status: 400 }
      );

    return HttpResponse.json(mockedUser);
  }),
];

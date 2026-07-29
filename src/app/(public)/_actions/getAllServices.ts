// export async function getAllServices() {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/api/services`,
//       {
//         method: "GET",
//         cache: "no-store",
//       }
//     );

//     if (!res.ok) {
//       throw new Error("Failed to fetch services");
//     }

//     const data = await res.json();

//     return {
//       success: true,
//       data: data.data,
//     };
//   } catch (error) {
//     console.error("Error fetching services:", error);

//     return {
//       success: false,
//       data: [],
//       message: "Unable to fetch services.",
//     };
//   }
// }





























interface GetAllServicesParams {
  page?: number;
  limit?: number;
  categoryId?: string;
  city?: string;
  district?: string;
  address?: string;
  minRating?: number;
}

export async function getAllServices(
  params: GetAllServicesParams = {}
) {
  try {
    const searchParams = new URLSearchParams();

    if (params.page) {
      searchParams.set("page", params.page.toString());
    }

    if (params.limit) {
      searchParams.set("limit", params.limit.toString());
    }

    if (params.categoryId) {
      searchParams.set("categoryId", params.categoryId);
    }

    if (params.city) {
      searchParams.set("city", params.city);
    }

    if (params.district) {
      searchParams.set("district", params.district);
    }

    if (params.address) {
      searchParams.set("address", params.address);
    }

    if (params.minRating) {
      searchParams.set("minRating", params.minRating.toString());
    }

    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/services?${searchParams.toString()}`;

    const res = await fetch(url, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch services");
    }

    const data = await res.json();

    return {
      success: true,
      data: data.data,
      meta: data.meta,
    };
  } catch (error) {
    console.error("Error fetching services:", error);

    return {
      success: false,
      data: [],
      meta: null,
      message: "Unable to fetch services.",
    };
  }
}
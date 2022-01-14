import NavbarAdmin from "../../../components/NavbarAdmin";

const AddNews = {
    render() {
        return /* html */ `
        ${NavbarAdmin.render()}
        <header class="bg-white shadow ">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
          <h1 class="text-3xl font-bold text-gray-900">
            Thêm tin tức
          </h1>
       <span class="rounded bg-gray-900 py-1 px-2">
       <a class="text-white text-xs " href= "admin/news">Quay Lại</a>
       </span>
        </div>
      </header>
        <main class = "container m-auto w-full">
        <div class="md:grid md:grid-cols-3 md:gap-6 pt-5">
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div class="grid grid-cols-3 gap-6">
                  <div class="col-span-3 sm:col-span-2">
                    <label for="company-website" class="block text-sm font-medium text-gray-700">
                      Tiêu Đề
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">

                      <input type="text" name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none h-8 flex-1 block w-full rounded-none  rounded-r-md sm:text-sm border-gray-300" placeholder="www.example.com">
                    </div>
                  </div>
                </div>
    
                <div>
                  <label for="about" class="block text-sm font-medium text-gray-700">
                    Nội dung
                  </label>
                  <div class="mt-1">
                    <textarea id="about" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Nội dung"></textarea>
                  </div>
                  <p class="mt-2 text-sm text-gray-500">
                    Brief description for your profile. URLs are hyperlinked.
                  </p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">
                   Ảnh
                  </label>
                  <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div class="space-y-1 text-center">
                      <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <div class="flex text-sm text-gray-600">
                        <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                          <span>Đăng ảnh</span>
                          <input id="file-upload" name="file-upload" type="file" class="sr-only">
                        </label>
                        <p class="pl-1">hoặc up load file</p>
                      </div>
                      <p class="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Lưu
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
        </main>
        `;
    },
};
export default AddNews;
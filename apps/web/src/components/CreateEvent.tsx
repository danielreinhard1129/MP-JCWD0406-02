'use client';
import {
  Button,
  Datepicker,
  FileInput,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  TextInput,
} from 'flowbite-react';
import { useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

const CreateEvent = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="rounded-3xl max-w-6xl mx-auto shadow-md h-fit py-3 px-6">
      <h1 className="text-center text-3xl font-bold">CREATE EVENT</h1>
      <hr className="m-6" />

      {/* EVENT NAME */}
      <div>
        <div className="">
          <div className="my-6 md:flex md:justify-between  ">
            <div className="items-center md:items-start mb-2">
              <h1 className="text-md font-medium md:text-lg md:font-semibold">
                Event Name
              </h1>
              <h5 className="hidden md:block lg:block md:w-52 lg:w-80 text-xs font-thin">
                Disarankan untuk tidak menggunakan huruf kapital berlebih,
                memasukkan Nama Event dengan jelas
              </h5>
            </div>
            <TextInput
              placeholder="Kejar Tangkap Pantat Gemoy"
              id="base"
              type="text"
              sizing="md"
              className="w-full max-w-sm md:w-full md:max-w-2xl lg:w-full lg:max-w-3xl  "
            />
          </div>

          {/* EVENT CATEGORY */}
          <div className="my-6 md:flex md:justify-between">
            <div className=" items-center md:items-start mb-2">
              <h1 className="text-md font-medium md:text-lg md:font-semibold">
                Category
              </h1>
              <h5 className="hidden md:block lg:block md:w-52 lg:w-80 text-xs font-thin">
                Pilih kategori yang sesuai. Jika pemilihan kategori kurang
                sesuai, maka akan mempengaruhi penjualan
              </h5>
            </div>
            <TextInput
              placeholder="Music, Religi, Sport"
              id="base"
              type="text"
              sizing="md"
              className="w-full max-w-sm md:w-full md:max-w-2xl lg:w-full lg:max-w-3xl  "
            />
          </div>

          {/* TUMBNAIL */}
          <div className="my-6 md:flex md:justify-between">
            <div className=" items-center md:items-start mb-2">
              <h1 className="text-md font-medium md:text-lg md:font-semibold">
                Tumbnail & PIC
              </h1>
              <h5 className="hidden md:block lg:block md:w-52 lg:w-80 text-xs font-thin">
                Format gambar .jpg .jpeg .png dan ukuran 16:9 (Untuk gambar
                optimal gunakan ukuran minimum 1440 x 900 px).
              </h5>
            </div>
            <div className="flex items-center justify-center w-full max-w-sm md:w-full md:max-w-2xl lg:w-full lg:max-w-3xl">
              <Label
                htmlFor="dropzone-file"
                className="dark:hover:bg-bray-800 flex h-32 md:h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <svg
                    className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-xs text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                </div>
                <FileInput id="dropzone-file" className="hidden" />
              </Label>
            </div>
          </div>

          {/* Event Description */}
          <div className="my-6 md:flex md:justify-between">
            <div className="items-center md:items-start mb-2 ">
              <h1 className="text-md font-medium md:text-lg md:font-semibold">
                Description
              </h1>
              <h5 className="hidden md:block lg:block md:w-52 lg:w-80 text-xs font-thin">
                Jelaskan acaramu sedetail mungkin agar memikat calon penonton
              </h5>
            </div>
            <textarea
              id="message"
              rows={4}
              className="block  w-full max-w-sm md:w-full md:max-w-2xl lg:w-full lg:max-w-3xl p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>

          {/* DATE */}
          <div className="my-6 flex justify-start ">
            <div className=" items-center md:items-start">
              <h1 className="text-md font-medium md:text-lg md:font-semibold">
                Date
              </h1>
              <h5 className="hidden md:block lg:block md:w-52 lg:w-80 text-xs font-thin">
                Pastikan tanggal awal tidak lebih besar dari tanggal akhir
              </h5>
            </div>
            <div className="items-center pl-6 lg:pl-4">
              <div className="lg:flex mb-4 md:items-center lg:items-center gap-5">
                <h1 className="text-sm font-medium md:text-md md:font-semibold">
                  Start Date
                </h1>
                <Datepicker
                  id="base"
                  type="text"
                  sizing="xs"
                  className="w-full max-w-xs md:w-[200px] md:max-w-2xl lg:w-[200px] lg:max-w-3xl  "
                />
              </div>
              <div className="lg:flex justify-between md:items-center lg:items-center gap-5">
                <h1 className="text-sm font-medium md:text-md md:font-semibold">
                  End Date
                </h1>
                <Datepicker
                  id="base"
                  type="text"
                  sizing="xs"
                  className="w-full max-w-xs md:w-[200px] md:max-w-2xl lg:w-[200px] lg:max-w-3xl  "
                />
              </div>
            </div>
          </div>

          {/* TIME */}
          <div className="my-6 md:flex md:justify-between">
            <div className="items-center md:items-start mb-2">
              <h1 className="text-md font-medium md:text-lg md:font-semibold">
                Time
              </h1>
              <h5 className="hidden md:block lg:block md:w-52 lg:w-80 text-xs font-thin">
                Gunakan format 24 jam (hh-mm)
              </h5>
            </div>
            <TextInput
              id="base"
              type="text"
              sizing="md"
              className="w-full max-w-sm md:w-full md:max-w-2xl lg:w-full lg:max-w-3xl  "
            />
          </div>

          {/* LOCATION */}
          <div className="my-6 md:flex md:justify-between">
            <div className="items-center md:items-start mb-2 ">
              <h1 className="text-md font-medium md:text-lg md:font-semibold">
                Location
              </h1>
              <h5 className="hidden md:block lg:block md:w-52 lg:w-80 text-xs font-thin">
                Pilih lokasi eventmu. Jika lokasi kurang sesuai, maka akan
                mempengaruhi penjualan
              </h5>
            </div>
            <TextInput
              placeholder="Batam"
              id="base"
              type="text"
              sizing="md"
              className="w-full max-w-sm md:w-full md:max-w-2xl lg:w-full lg:max-w-3xl  "
            />
          </div>

          {/* Ticket Type */}
          <div className="my-6 md:flex md:justify-between">
            <div className="items-center md:items-start mb-2 ">
              <h1 className="text-md font-medium md:text-lg md:font-semibold">
                Ticket Type
              </h1>
              <h5 className="hidden md:block lg:block md:w-52 lg:w-80 text-xs font-thin">
                Masukkan Tipe Tiket yang disediakan untuk diiklankan
              </h5>
            </div>
            <TextInput
              placeholder="VIP Standing"
              id="base"
              type="text"
              sizing="md"
              className="w-full max-w-sm md:w-full md:max-w-2xl lg:w-full lg:max-w-3xl  "
            />
          </div>

          {/* PRICE */}
          <div className="my-6 md:flex md:justify-between">
            <div className="items-center md:items-start mb-2">
              <h1 className="text-md font-medium md:text-lg md:font-semibold">
                Price
              </h1>
              <h5 className="hidden md:block lg:block md:w-52 lg:w-80 text-xs font-thin">
                Best Price Best Spice
              </h5>
            </div>
            <TextInput
              placeholder="300000"
              id="base"
              type="text"
              sizing="md"
              className="w-full max-w-sm md:w-full md:max-w-2xl lg:w-full lg:max-w-3xl  "
            />
          </div>

          {/* TOTAL SEAT */}
          <div className="my-6 md:flex md:justify-between">
            <div className=" items-center md:items-start mb-2">
              <h1 className="text-md font-medium md:text-lg md:font-semibold">
                Total Seat
              </h1>
              <h5 className="hidden md:block lg:block md:w-52 lg:w-80 text-xs font-thin">
                Berapa jumlah kursi yang tersedia? Masukkan. Pastikan sesuai
                space
              </h5>
            </div>
            <TextInput
              placeholder="5000"
              id="base"
              type="text"
              sizing="md"
              className="w-full max-w-sm md:w-full md:max-w-2xl lg:w-full lg:max-w-3xl  "
            />
          </div>
        </div>
        <div>
          {/* PROMOTION */}
          <div className="my-6 md:flex md:justify-between">
            <div className=" items-center md:items-start mb-2">
              <h1 className="text-md font-medium md:text-lg md:font-semibold">
                Code V
              </h1>
              <h5 className="hidden md:block lg:block md:w-52 lg:w-80 text-xs font-thin">
                Buat promosi untuk eventmu, masukkan Referal Code untuk dapat
                memotong harga total dari penjualan pertransaksi
              </h5>
            </div>
            <TextInput
              id="base"
              type="text"
              sizing="md"
              className="w-full max-w-sm md:w-full md:max-w-2xl lg:w-full lg:max-w-3xl  "
            />
          </div>
          {/* PERSENTASE DISKON */}

          <div className="my-6 md:flex md:justify-between">
            <div className=" items-center md:items-start mb-2">
              <h1 className="text-md font-medium md:text-lg md:font-semibold">
                Discount
              </h1>
              <h5 className="hidden md:block lg:block md:w-52 lg:w-80 text-xs font-thin">
                Buat promosi untuk eventmu, masukkan Referal Code untuk dapat
                memotong harga total dari penjualan pertransaksi
              </h5>
            </div>
            <TextInput
              id="base"
              type="text"
              sizing="md"
              className="w-full max-w-sm md:w-full md:max-w-2xl lg:w-[200px] lg:max-w-3xl  "
            />
          </div>
        </div>
        <div>
          <div className="flex justify-end gap-5">
            <Button
              onClick={() => setOpenModal(true)}
              color="teal"
              size="lg"
              className="rounded-full md:w-40"
            >
              Cancel
            </Button>
            <Modal
              show={openModal}
              size="md"
              onClose={() => setOpenModal(false)}
              popup
            >
              <ModalHeader />
              <ModalBody>
                <div className="text-center">
                  <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Are you sure you want to cancel?
                  </h3>
                  <div className="flex justify-center gap-4">
                    <Button color="failure" onClick={() => setOpenModal(false)}>
                      {"Yes, I'm sure"}
                    </Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                      Back
                    </Button>
                  </div>
                </div>
              </ModalBody>
            </Modal>
            <Button size="lg" className="rounded-full md:w-40">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;

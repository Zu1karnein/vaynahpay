import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-6">
        <!-- Footer Grid -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <!-- Company Info -->
          <div>
            <div class="flex items-center gap-2 mb-4">
              <img
                class="w-[10rem] h-auto"
                src="assets/logoVP1.png"
                alt="VainahPayLogo"
              />
            </div>
            <p class="text-slate-400 text-sm">
              Modern payment solutions for everyone.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="font-semibold mb-4 text-white">Product</h3>
            <ul class="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Features</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Pricing</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Security</a
                >
              </li>
            </ul>
          </div>

          <!-- Company -->
          <div>
            <h3 class="font-semibold mb-4 text-white">Company</h3>
            <ul class="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" class="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Contact</a
                >
              </li>
            </ul>
          </div>

          <!-- Legal -->
          <div>
            <h3 class="font-semibold mb-4 text-white">Legal</h3>
            <ul class="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Privacy</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors">Terms</a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Cookie Policy</a
                >
              </li>
            </ul>
          </div>
        </div>

        <!-- Divider -->
        <div class="border-t border-slate-800 pt-8">
          <!-- Bottom Section -->
          <div
            class="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm"
          >
            <p>&copy; 2024 VainahPay. All rights reserved.</p>
            <div class="flex gap-6 mt-4 md:mt-0">
              <a href="#" class="hover:text-white transition-colors">Twitter</a>
              <a href="#" class="hover:text-white transition-colors"
                >LinkedIn</a
              >
              <a href="#" class="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [],
})
export class FooterComponent {}
